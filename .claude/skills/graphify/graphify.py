#!/usr/bin/env python3
"""Knowledge graph of a codebase: files, imports, Python defs, Markdown links."""
import ast, json, os, re, sys
from collections import Counter
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(sys.argv[1] if len(sys.argv) > 1 else ".").resolve()
OUT = ROOT / "graphify-out"
SKIP = {".git", "node_modules", "graphify-out", "__pycache__", ".venv", "venv", "dist", "build"}
JS = {".js", ".jsx", ".ts", ".tsx", ".mjs"}
EXTS = {".py", ".md", ".html", ".css", *JS}
JS_IMP = re.compile(r"""(?:import\s[^'"]*?from\s*|import\s*\(?|require\()\s*['"]([^'"]+)['"]""")
LINK = re.compile(r"""(?:\]\(|(?:src|href)=["'])([^)"'#?\s]+)""")
nodes, edges = {}, []

def node(i, t): nodes.setdefault(i, t); return i
def edge(a, b, k): edges.append({"source": a, "target": b, "kind": k})
def rel(p): return p.relative_to(ROOT).as_posix()

def j(*p): return ".".join(filter(None, p))

def resolve(src, spec):
    base = ((ROOT if spec.startswith("/") else src.parent) / unquote(spec).lstrip("/")).resolve()
    for c in (base, *(base.with_suffix(e) for e in EXTS), *(base / f"index{e}" for e in (".js", ".ts"))):
        if c.is_file() and ROOT in c.parents: return node(rel(c), "file" if c.suffix in EXTS else "asset")

files = [Path(d) / f for d, ds, fs in os.walk(ROOT) if not ds.__setitem__(slice(None), [x for x in ds if x not in SKIP]) for f in fs if Path(f).suffix in EXTS]
pymods = {rel(f)[:-3].replace("/", ".").removesuffix(".__init__"): rel(f) for f in files if f.suffix == ".py"}
for f in files:
    src, text = node(rel(f), "file"), f.read_text(errors="ignore")
    if f.suffix == ".py":
        try: tree = ast.parse(text)
        except SyntaxError: continue
        for n in ast.walk(tree):
            if isinstance(n, (ast.ClassDef, ast.FunctionDef, ast.AsyncFunctionDef)) and n.col_offset == 0:
                edge(src, node(f"{src}::{n.name}", "class" if isinstance(n, ast.ClassDef) else "function"), "defines")
            lvl = getattr(n, "level", 0) or 0
            imps = [(a.name, []) for a in n.names] if isinstance(n, ast.Import) else [(j(*(rel(f).split("/")[:-lvl] if lvl else []), n.module), n.names)] if isinstance(n, ast.ImportFrom) else []
            for m, names in imps:
                subs = [pymods[s] for a in names if (s := j(m, a.name)) in pymods]
                for t in subs or [pymods.get(m) or not lvl and node(m.split(".")[0], "external")]: t and edge(src, t, "imports")
    else:
        js = f.suffix in JS
        for spec in (JS_IMP if js else LINK).findall(text):
            if "://" in spec or spec.startswith(("mailto:", "data:")): continue
            if js and not spec.startswith("."): edge(src, node(spec, "external"), "imports")
            elif t := resolve(f, spec): edge(src, t, "imports" if js else "links")

OUT.mkdir(exist_ok=True)
edges = [dict(zip(("source", "target", "kind"), t)) for t in dict.fromkeys(tuple(e.values()) for e in edges)]
graph = {"nodes": [{"id": i, "type": t} for i, t in nodes.items()], "edges": edges}
(OUT / "graph.json").write_text(json.dumps(graph, indent=1))
deg = Counter(x for e in edges for x in (e["source"], e["target"]))
orph = sorted(i for i, t in nodes.items() if t == "file" and not any(e["kind"] != "defines" and i in (e["source"], e["target"]) for e in edges))
(OUT / "GRAPH_REPORT.md").write_text("\n".join([
    f"# Graph report: {ROOT.name}", "", f"{len(nodes)} nodes · {len(edges)} edges · " + ", ".join(f"{v} {k}" for k, v in Counter(nodes.values()).items()),
    "", "## Most connected", *[f"- `{i}` ({nodes[i]}): {d}" for i, d in deg.most_common(15)],
    "", "## Orphan files (no import/link)", *([f"- `{i}`" for i in orph] or ["- none"]), ""]))
(OUT / "graph.html").write_text(f"""<!doctype html><meta charset=utf-8><title>{ROOT.name} graph</title>
<style>body{{margin:0;background:#111;font:11px sans-serif}}svg{{width:100vw;height:100vh;cursor:grab}}text{{fill:#ccc;pointer-events:none}}line{{stroke:#444}}#L{{position:fixed;top:8px;left:8px;color:#ccc}}</style>
<svg><g></g></svg><script>
const g={json.dumps(graph).replace("</", "<\\/")},C={{file:"#4e9af1",function:"#5cc98a",class:"#e8b04b",external:"#999",asset:"#c678dd"}},N="http://www.w3.org/2000/svg",
Z=document.querySelector("g"),W=innerWidth,H=innerHeight,ix={{}},el=(t,a)=>{{const e=document.createElementNS(N,t);for(const k in a)e.setAttribute(k,a[k]);return Z.appendChild(e)}};
document.body.insertAdjacentHTML("afterbegin",`<div id=L>${{Object.entries(C).map(([k,c])=>`<b style=color:${{c}}>●</b> ${{k}}`).join(" &nbsp;")}}</div>`);
let v={{x:0,y:0,k:1}},drag=null,pan=null,A=1;const view=()=>Z.setAttribute("transform",`translate(${{v.x}},${{v.y}}) scale(${{v.k}})`);
g.nodes.forEach((n,i)=>{{ix[n.id]=n;n.x=W/2+Math.cos(i)*i*3;n.y=H/2+Math.sin(i)*i*3;n.vx=n.vy=0}});
const E=g.edges.map(e=>({{a:ix[e.source],b:ix[e.target],l:el("line")}}));
g.nodes.forEach(n=>{{n.c=el("circle",{{r:n.type=="file"?6:4,fill:C[n.type]}});el("title").textContent=n.id;n.c.appendChild(Z.lastChild);
n.c.onmousedown=e=>{{e.stopPropagation();drag=n;A=Math.max(A,.3)}};if(n.type=="file"){{n.t=el("text",{{dx:8}});n.t.textContent=n.id}}}});
onmousedown=e=>pan=[e.clientX-v.x,e.clientY-v.y];onmouseup=()=>drag=pan=null;
onmousemove=e=>{{if(drag){{drag.x=(e.clientX-v.x)/v.k;drag.y=(e.clientY-v.y)/v.k;drag.vx=drag.vy=0}}else if(pan){{v.x=e.clientX-pan[0];v.y=e.clientY-pan[1];view()}}}};
onwheel=e=>{{const f=e.deltaY<0?1.1:1/1.1;v.x=e.clientX-(e.clientX-v.x)*f;v.y=e.clientY-(e.clientY-v.y)*f;v.k*=f;view()}};
(function tick(){{const n=g.nodes;A*=.99;if(A>.01){{for(const a of n)for(const b of n)if(a!==b){{const dx=a.x-b.x,dy=a.y-b.y,d=dx*dx+dy*dy||1;a.vx+=dx/d*30*A;a.vy+=dy/d*30*A}}
for(const{{a,b}}of E){{const dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||1,f=(d-60)*.01*A;a.vx+=dx/d*f;a.vy+=dy/d*f;b.vx-=dx/d*f;b.vy-=dy/d*f}}}}
for(const p of n){{p.vx+=(W/2-p.x)*.002*A;p.vy+=(H/2-p.y)*.002*A;if(p!==drag){{p.x+=p.vx*=.85;p.y+=p.vy*=.85}}p.c.setAttribute("cx",p.x);p.c.setAttribute("cy",p.y);p.t&&(p.t.setAttribute("x",p.x),p.t.setAttribute("y",p.y))}}
for(const{{a,b,l}}of E){{l.setAttribute("x1",a.x);l.setAttribute("y1",a.y);l.setAttribute("x2",b.x);l.setAttribute("y2",b.y)}}requestAnimationFrame(tick)}})();
</script>""")
print(f"{len(nodes)} nodes, {len(edges)} edges -> {OUT}")
