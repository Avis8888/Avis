import{_ as n,o as a,c as i,a2 as l}from"./chunks/framework.D0WU_twj.js";const c=JSON.parse('{"title":"知识图谱","description":"","frontmatter":{"AIGC":{"Label":"1","ContentProducer":"001191440300708461136T1XGW3","ProduceID":"8d1cde234eeeb79bc6dcc81a4ef71839_b2c91a585edb11f1a4f35254002afed2","ReservedCode1":"r6ad/M+8HLRW1omY41rJm6aDrcAl9LpZ4Hqd3DASjHSEnR/Ivj+mb5zxLCTSvSM6f7C+VKBiOHB0i1glcbUVa2Dfh0om73BN75dKE6MaKpB7cvvOSgIRQyPZK2/GNLZOGU8g7ZzbD2hvvlvyHfpJ4KZQqgM0ZlKtth2JLDemwougi2hz7frJryFp2gc=","ContentPropagator":"001191440300708461136T1XGW3","PropagateID":"8d1cde234eeeb79bc6dcc81a4ef71839_b2c91a585edb11f1a4f35254002afed2","ReservedCode2":"r6ad/M+8HLRW1omY41rJm6aDrcAl9LpZ4Hqd3DASjHSEnR/Ivj+mb5zxLCTSvSM6f7C+VKBiOHB0i1glcbUVa2Dfh0om73BN75dKE6MaKpB7cvvOSgIRQyPZK2/GNLZOGU8g7ZzbD2hvvlvyHfpJ4KZQqgM0ZlKtth2JLDemwougi2hz7frJryFp2gc="}},"headers":[],"relativePath":"knowledge-graph.md","filePath":"knowledge-graph.md","lastUpdated":1780528479000}'),p={name:"knowledge-graph.md"};function e(t,s,E,r,h,k){return a(),i("div",null,[...s[0]||(s[0]=[l(`<p><a href="/Avis/">Avis</a> &gt; 知识图谱</p><h1 id="知识图谱" tabindex="-1">知识图谱 <a class="header-anchor" href="#知识图谱" aria-label="Permalink to &quot;知识图谱&quot;">​</a></h1><blockquote><p>航空航天阀门知识体系可视化探索 — 六大维度交互式图谱</p></blockquote><hr><h2 id="_1-阀门分类学" tabindex="-1">1. 阀门分类学 <a class="header-anchor" href="#_1-阀门分类学" aria-label="Permalink to &quot;1. 阀门分类学&quot;">​</a></h2><details open><summary>分类学树状图 — 航空航天阀门领域-系统-功能层次分类</summary><p>以航空航天阀门为根节点，按领域—系统—功能逐级展开，覆盖航天推进阀门 7 大子类与航空阀门 5 大系统分支。</p><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ROOT((&quot;航空航天阀门&quot;))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ROOT --&gt; SF[&quot;航天阀门&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ROOT --&gt; AV[&quot;航空阀门&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF --&gt; SF1[&quot;液体火箭发动机阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF --&gt; SF2[&quot;卫星推进阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF --&gt; SF3[&quot;姿控阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF --&gt; SF4[&quot;增压阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF --&gt; SF5[&quot;火工阀&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF1 --&gt; SF1a[&quot;MFV · 主燃料阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF1 --&gt; SF1b[&quot;MOV · 主氧化剂阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF1 --&gt; SF1c[&quot;推力室冷却阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF1 --&gt; SF1d[&quot;预燃室阀&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF2 --&gt; SF2a[&quot;电热推力器阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF2 --&gt; SF2b[&quot;霍尔推力器阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF2 --&gt; SF2c[&quot;冷气推进阀&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF3 --&gt; SF3a[&quot;RCS · 推进剂阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF3 --&gt; SF3b[&quot;反作用轮锁紧阀&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF4 --&gt; SF4a[&quot;氦气增压阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF4 --&gt; SF4b[&quot;自生增压阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF4 --&gt; SF4c[&quot;贮箱泄压阀&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF5 --&gt; SF5a[&quot;电爆阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF5 --&gt; SF5b[&quot;切断阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SF5 --&gt; SF5c[&quot;点火隔离阀&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV --&gt; AV1[&quot;发动机阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV --&gt; AV2[&quot;燃油阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV --&gt; AV3[&quot;液压阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV --&gt; AV4[&quot;ECS · 环境控制阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV --&gt; AV5[&quot;APU · 辅助动力阀&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV1 --&gt; AV1a[&quot;FMU · 燃油计量单元&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV1 --&gt; AV1b[&quot;VBV · 可调放气阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV1 --&gt; AV1c[&quot;VSV · 可调静叶阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV1 --&gt; AV1d[&quot;TBV · 瞬态放气阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV1 --&gt; AV1e[&quot;ACC · 主动间隙控制&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV2 --&gt; AV2a[&quot;PRSOV · 压力调节关断阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV2 --&gt; AV2b[&quot;HPV · 高压关断阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV2 --&gt; AV2c[&quot;FCV · 燃油控制阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV2 --&gt; AV2d[&quot;燃油分配阀&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV3 --&gt; AV3a[&quot;EHSV · 电液伺服阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV3 --&gt; AV3b[&quot;DDV · 直接驱动阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV3 --&gt; AV3c[&quot;优先阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV3 --&gt; AV3d[&quot;卸荷阀&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV4 --&gt; AV4a[&quot;TCV · 温度控制阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV4 --&gt; AV4b[&quot;NGS · 氮气发生系统阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV4 --&gt; AV4c[&quot;流量控制阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV4 --&gt; AV4d[&quot;舱压调节阀&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV5 --&gt; AV5a[&quot;进气导叶阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV5 --&gt; AV5b[&quot;燃油计量阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AV5 --&gt; AV5c[&quot;引气控制阀&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p1 fill:rgba(0,122,255,0.08),stroke:rgba(0,122,255,0.4),stroke-width:1px,color:#007AFF</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p2 fill:rgba(255,149,0,0.08),stroke:rgba(255,149,0,0.4),stroke-width:1px,color:#C75B00</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef root fill:#fff,stroke:rgba(0,0,0,0.3),stroke-width:2px,color:#1D1D1F</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class ROOT root</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class SF,SF1,SF2,SF3,SF4,SF5,SF1a,SF1b,SF1c,SF1d,SF2a,SF2b,SF2c,SF3a,SF3b,SF4a,SF4b,SF4c,SF5a,SF5b,SF5c p1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class AV,AV1,AV2,AV3,AV4,AV5,AV1a,AV1b,AV1c,AV1d,AV1e,AV2a,AV2b,AV2c,AV2d,AV3a,AV3b,AV3c,AV3d,AV4a,AV4b,AV4c,AV4d,AV5a,AV5b,AV5c p2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div><blockquote><p>图例：蓝色 = 航天阀门 | 橙色 = 航空阀门</p></blockquote></details><hr><h2 id="_2-知识体系网络" tabindex="-1">2. 知识体系网络 <a class="header-anchor" href="#_2-知识体系网络" aria-label="Permalink to &quot;2. 知识体系网络&quot;">​</a></h2><details><summary>知识体系网络 — 六编章节间的知识依赖关系</summary><p>从概论出发，依先基础后专精、先设计后验证原则展开。实线 <code>→</code> 为前置依赖，虚线 <code>-.-&gt;</code> 为交叉引用。</p><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subgraph P1 [&quot;第一编 绪论与基础科学&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH01[&quot;Ch.1 概论&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH02[&quot;Ch.2 流体力学基础&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH03[&quot;Ch.3 热力学基础&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH04[&quot;Ch.4 材料科学基础&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH05[&quot;Ch.5 分类与选型&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subgraph P2 [&quot;第二编 设计工程&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH06[&quot;Ch.6 驱动方式&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH09[&quot;Ch.9 极端环境密封&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH10[&quot;Ch.10 系统工程&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH13[&quot;Ch.13 电磁驱动阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH14[&quot;Ch.14 气动液压阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH16[&quot;Ch.16 火工电爆阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH18[&quot;Ch.18 精密加工&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH25[&quot;Ch.25 氢氧发动机阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH26[&quot;Ch.26 可重复使用阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH63[&quot;Ch.63 航空发动机阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH65[&quot;Ch.65 液压系统阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH66[&quot;Ch.66 ECS · 环境控制阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subgraph P3 [&quot;第三编 制造工艺与试验验证&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH29[&quot;Ch.29 焊接钎焊&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH31[&quot;Ch.31 飞行验证&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH32[&quot;Ch.32 可靠性工程&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH33[&quot;Ch.33 国际标准&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH35[&quot;Ch.35 测试鉴定&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH36[&quot;Ch.36 中国标准&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subgraph P4 [&quot;第四编 系统工程与管理&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH37[&quot;Ch.37 系统工程管理&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH39[&quot;Ch.39 质量保证&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH41[&quot;Ch.41 数字孪生&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH42[&quot;Ch.42 产业格局&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH43[&quot;Ch.43 新型材料&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH46[&quot;Ch.46 重大故障&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH47[&quot;Ch.47 FMEA/FTA&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH67[&quot;Ch.67 适航认证&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subgraph P5 [&quot;第五编 前沿技术与未来发展&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH53[&quot;Ch.53 压电智能阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH54[&quot;Ch.54 传感器监测&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH57[&quot;Ch.57 绿色推进剂&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH58[&quot;Ch.58 核电推进阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH59[&quot;Ch.59 AI辅助设计&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH60[&quot;Ch.60 成本工程&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subgraph P6 [&quot;第六编 扩展专题&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH61[&quot;Ch.61 驱动电子学&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CH62[&quot;Ch.62 小型航天器阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH01 --&gt; CH02</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH01 --&gt; CH03</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH01 --&gt; CH04</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH01 --&gt; CH05</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH02 --&gt; CH06</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH03 --&gt; CH09</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH04 --&gt; CH09</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH04 --&gt; CH10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH05 --&gt; CH06</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH06 --&gt; CH13</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH06 --&gt; CH14</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH06 --&gt; CH16</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH09 --&gt; CH10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH10 --&gt; CH13</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH10 --&gt; CH14</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH10 --&gt; CH18</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH10 --&gt; CH63</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH13 --&gt; CH63</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH13 --&gt; CH65</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH14 --&gt; CH63</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH16 --&gt; CH25</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH18 --&gt; CH29</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH25 --&gt; CH26</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH63 --&gt; CH65</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH63 --&gt; CH66</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH29 --&gt; CH31</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH29 --&gt; CH32</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH31 --&gt; CH35</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH32 --&gt; CH33</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH32 --&gt; CH35</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH33 --&gt; CH36</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH35 --&gt; CH67</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH36 --&gt; CH67</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH37 --&gt; CH39</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH37 --&gt; CH41</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH37 --&gt; CH42</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH39 --&gt; CH41</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH41 --&gt; CH43</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH43 --&gt; CH53</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH46 --&gt; CH47</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH53 --&gt; CH54</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH53 --&gt; CH57</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH53 --&gt; CH59</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH54 --&gt; CH60</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH57 --&gt; CH58</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH59 --&gt; CH60</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH62 --&gt; CH26</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH26 -.-&gt; CH63</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH46 -.-&gt; CH67</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH09 -.-&gt; CH66</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH04 -.-&gt; CH63</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CH02 -.-&gt; CH63</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p1 fill:rgba(0,122,255,0.08),stroke:rgba(0,122,255,0.4),stroke-width:1px,color:#007AFF</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p2 fill:rgba(255,149,0,0.08),stroke:rgba(255,149,0,0.4),stroke-width:1px,color:#C75B00</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p3 fill:rgba(52,199,89,0.08),stroke:rgba(52,199,89,0.4),stroke-width:1px,color:#248A3D</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p4 fill:rgba(255,45,85,0.08),stroke:rgba(255,45,85,0.4),stroke-width:1px,color:#C01F3D</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p5 fill:rgba(175,82,222,0.08),stroke:rgba(175,82,222,0.4),stroke-width:1px,color:#8944AB</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p6 fill:rgba(90,200,250,0.08),stroke:rgba(90,200,250,0.4),stroke-width:1px,color:#3478A0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class CH01,CH02,CH03,CH04,CH05 p1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class CH06,CH09,CH10,CH13,CH14,CH16,CH18,CH25,CH26,CH63,CH65,CH66 p2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class CH29,CH31,CH32,CH33,CH35,CH36 p3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class CH37,CH39,CH41,CH42,CH43,CH46,CH47,CH67 p4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class CH53,CH54,CH57,CH58,CH59,CH60 p5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class CH61,CH62 p6</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br></div></div><blockquote><p>39 个核心章节节点 · 48 条知识依赖边</p></blockquote></details><hr><h2 id="_3-航空-航天对比" tabindex="-1">3. 航空/航天对比 <a class="header-anchor" href="#_3-航空-航天对比" aria-label="Permalink to &quot;3. 航空/航天对比&quot;">​</a></h2><details><summary>航空/航天对比 — 两域阀门系统级差异</summary><p>航空与航天阀门共享基础理论，但在工作环境、寿命模型、可靠性架构和标准体系上存在系统级差异。</p><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subgraph AERO [&quot;航空阀门&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A1[&quot;工作环境&lt;br/&gt;-55~+350°C&lt;br/&gt;大气压~3MPa&lt;br/&gt;宽频随机振动&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A2[&quot;寿命要求&lt;br/&gt;10⁴~10⁶ 循环&lt;br/&gt;视情维修&lt;br/&gt;MSG-3 分析驱动&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A3[&quot;可靠性&lt;br/&gt;MTBF 10⁴~10⁵ h&lt;br/&gt;双通道/双余度&lt;br/&gt;FHA + SSA 流程&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A4[&quot;重量要求&lt;br/&gt;严格但非极致&lt;br/&gt;轻合金/复材应用&lt;br/&gt;燃油效率驱动减重&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A5[&quot;标准体系&lt;br/&gt;FAR/CS/CCAR 25部&lt;br/&gt;DO-160 环境鉴定&lt;br/&gt;SAE ARP 系列&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A6[&quot;典型应用&lt;br/&gt;FMU · PRSOV · HPV&lt;br/&gt;VBV · VSV · TCV&lt;br/&gt;EHSV · DDV&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subgraph SPACE [&quot;航天阀门&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B1[&quot;工作环境&lt;br/&gt;-253~+3000°C&lt;br/&gt;真空~70MPa&lt;br/&gt;瞬态高g冲击&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B2[&quot;寿命要求&lt;br/&gt;1~100 循环(一次性)&lt;br/&gt;10~100 循环(复用)&lt;br/&gt;无维修设计&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B3[&quot;可靠性&lt;br/&gt;单点失效不可接受&lt;br/&gt;串联关断+并联冗余&lt;br/&gt;FMECA + FTA 闭环&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B4[&quot;重量要求&lt;br/&gt;极致减重&lt;br/&gt;每克成本 &gt;$1000&lt;br/&gt;钛合金/铍/CMC&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B5[&quot;标准体系&lt;br/&gt;MIL-STD/NASA-STD&lt;br/&gt;SMC-S-016 鉴定&lt;br/&gt;GJB 军用标准&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B6[&quot;典型应用&lt;br/&gt;MFV · MOV · 电爆阀&lt;br/&gt;氦气增压阀&lt;br/&gt;RCS · 推进剂阀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p1 fill:rgba(0,122,255,0.08),stroke:rgba(0,122,255,0.4),stroke-width:1px,color:#007AFF</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p2 fill:rgba(255,149,0,0.08),stroke:rgba(255,149,0,0.4),stroke-width:1px,color:#C75B00</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class A1,A2,A3,A4,A5,A6 p2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class B1,B2,B3,B4,B5,B6 p1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><blockquote><p>图例：橙色 = 航空阀门 | 蓝色 = 航天阀门</p></blockquote></details><hr><h2 id="_4-故障模式关联" tabindex="-1">4. 故障模式关联 <a class="header-anchor" href="#_4-故障模式关联" aria-label="Permalink to &quot;4. 故障模式关联&quot;">​</a></h2><details><summary>故障模式关联 — 六类典型失效的因果链条</summary><p>整合重大故障分析、FMEA/FTA 和 FMECA 速查内容，展示 6 种失效模式的完整因果链与缓解措施。</p><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM1[&quot;故障: 卡滞&lt;br/&gt;Sticking/Binding&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM2[&quot;故障: 泄漏&lt;br/&gt;Leakage&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM3[&quot;故障: 断裂&lt;br/&gt;Fracture&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM4[&quot;故障: 腐蚀&lt;br/&gt;Corrosion&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM5[&quot;故障: 磨损&lt;br/&gt;Wear&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM6[&quot;故障: 电气故障&lt;br/&gt;Electrical Failure&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C1a[&quot;污染颗粒嵌入配合间隙&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C1b[&quot;热膨胀导致间隙消失&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C1c[&quot;润滑剂降解/挥发&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C2a[&quot;密封面疲劳/蠕变&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C2b[&quot;O形圈压缩永久变形&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C2c[&quot;焊接缺陷/微裂纹&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C3a[&quot;HCF · 高周疲劳&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C3b[&quot;LCF · 低周/热机械疲劳&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C3c[&quot;SCC · 应力腐蚀开裂&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C4a[&quot;推进剂化学腐蚀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C4b[&quot;电偶腐蚀&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C4c[&quot;高温氧化/硫化&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C5a[&quot;微动磨损 Fretting&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C5b[&quot;冲蚀 Erosion&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C5c[&quot;粘着磨损 Adhesive&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C6a[&quot;线圈短路/断路&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C6b[&quot;绝缘击穿&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  C6c[&quot;连接器接触不良&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  E1[&quot;影响: 阀门无法开关&lt;br/&gt;推力裕度丧失&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  E2[&quot;影响: 工质流失&lt;br/&gt;密封等级降级&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  E3[&quot;影响: 结构完整性丧失&lt;br/&gt;灾难性失效&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  E4[&quot;影响: 材料性能退化&lt;br/&gt;寿命缩短&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  E5[&quot;影响: 配合间隙增大&lt;br/&gt;内漏加剧&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  E6[&quot;影响: 指令响应失效&lt;br/&gt;丧失控制&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M1a[&quot;缓解: 洁净度提升&lt;br/&gt;微粒过滤 10μm&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M1b[&quot;缓解: 间隙热补偿&lt;br/&gt;CTE 匹配设计&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M1c[&quot;缓解: 固体润滑膜&lt;br/&gt;MoS₂ / PTFE&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M2a[&quot;缓解: 金属密封&lt;br/&gt;+ 冗余密封&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M2b[&quot;缓解: FFKM&lt;br/&gt;全氟醚耐温密封&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M2c[&quot;缓解: 100% 氦检漏&lt;br/&gt;+ 射线探伤&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M3a[&quot;缓解: S-N 曲线&lt;br/&gt;+ Goodman 修正&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M3b[&quot;缓解: 热-力耦合 FEA&lt;br/&gt;+ 循环试验&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M3c[&quot;缓解: 材料选择&lt;br/&gt;Inconel 718 / 钛合金&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M4a[&quot;缓解: 兼容性浸泡试验&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M4b[&quot;缓解: 绝缘垫片&lt;br/&gt;+ 表面处理&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M4c[&quot;缓解: TBC 热障涂层&lt;br/&gt;+ 耐热合金&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M5a[&quot;缓解: 硬质涂层&lt;br/&gt;CrN / TiN&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M5b[&quot;缓解: 流道优化&lt;br/&gt;降低流速&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M5c[&quot;缓解: 材料配对优化&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M6a[&quot;缓解: 双绕组冗余设计&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M6b[&quot;缓解: HIRF/雷电防护&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  M6c[&quot;缓解: 金触点&lt;br/&gt;+ 密封连接器&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM1 --&gt; C1a --&gt; E1 --&gt; M1a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM1 --&gt; C1b --&gt; E1 --&gt; M1b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM1 --&gt; C1c --&gt; E1 --&gt; M1c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM2 --&gt; C2a --&gt; E2 --&gt; M2a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM2 --&gt; C2b --&gt; E2 --&gt; M2b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM2 --&gt; C2c --&gt; E2 --&gt; M2c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM3 --&gt; C3a --&gt; E3 --&gt; M3a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM3 --&gt; C3b --&gt; E3 --&gt; M3b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM3 --&gt; C3c --&gt; E3 --&gt; M3c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM4 --&gt; C4a --&gt; E4 --&gt; M4a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM4 --&gt; C4b --&gt; E4 --&gt; M4b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM4 --&gt; C4c --&gt; E4 --&gt; M4c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM5 --&gt; C5a --&gt; E5 --&gt; M5a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM5 --&gt; C5b --&gt; E5 --&gt; M5b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM5 --&gt; C5c --&gt; E5 --&gt; M5c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM6 --&gt; C6a --&gt; E6 --&gt; M6a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM6 --&gt; C6b --&gt; E6 --&gt; M6b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FM6 --&gt; C6c --&gt; E6 --&gt; M6c</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef fail fill:rgba(255,45,85,0.1),stroke:rgba(255,45,85,0.5),stroke-width:2px,color:#C01F3D</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef cause fill:rgba(255,149,0,0.08),stroke:rgba(255,149,0,0.4),stroke-width:1px,color:#C75B00</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef effect fill:rgba(0,122,255,0.08),stroke:rgba(0,122,255,0.4),stroke-width:1px,color:#007AFF</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef mitig fill:rgba(52,199,89,0.08),stroke:rgba(52,199,89,0.4),stroke-width:1px,color:#248A3D</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class FM1,FM2,FM3,FM4,FM5,FM6 fail</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class C1a,C1b,C1c,C2a,C2b,C2c,C3a,C3b,C3c,C4a,C4b,C4c,C5a,C5b,C5c,C6a,C6b,C6c cause</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class E1,E2,E3,E4,E5,E6 effect</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class M1a,M1b,M1c,M2a,M2b,M2c,M3a,M3b,M3c,M4a,M4b,M4c,M5a,M5b,M5c,M6a,M6b,M6c mitig</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br></div></div><blockquote><p>6 种故障模式 · 18 条因果链 · 18 项缓解措施</p></blockquote></details><hr><h2 id="_5-标准体系" tabindex="-1">5. 标准体系 <a class="header-anchor" href="#_5-标准体系" aria-label="Permalink to &quot;5. 标准体系&quot;">​</a></h2><details><summary>标准体系层级 — 从适航法规到阀门产品要求</summary><p>四级标准体系逐层收敛：适航当局 → 审定规章 → 设备环境标准 → 行业/产品标准。</p><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FAA[&quot;FAA · 美国联邦航空局&lt;br/&gt;14 CFR Aeronautics&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  EASA[&quot;EASA · 欧洲航空安全局&lt;br/&gt;EU Regulations&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CAAC[&quot;CAAC · 中国民用航空局&lt;br/&gt;CCAR 中国民航规章&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FAR25[&quot;FAR 25部&lt;br/&gt;运输类飞机适航标准&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FAR33[&quot;FAR 33部&lt;br/&gt;航空发动机适航标准&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CS25[&quot;CS 25部&lt;br/&gt;大型飞机审定规范&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CS_E[&quot;CS-E&lt;br/&gt;发动机审定规范&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CCAR25[&quot;CCAR 25部&lt;br/&gt;运输类飞机标准&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CCAR33[&quot;CCAR 33部&lt;br/&gt;发动机适航标准&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DO160[&quot;DO-160G&lt;br/&gt;机载设备环境条件与测试程序&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SEC4[&quot;Sec.4 温度/高度&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SEC5[&quot;Sec.5 温度变化&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SEC6[&quot;Sec.6 湿度&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SEC7[&quot;Sec.7 工作冲击/坠撞安全&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SEC8[&quot;Sec.8 振动&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SEC10[&quot;Sec.10 防水&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SEC16[&quot;Sec.16 电源输入&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SEC18[&quot;Sec.18 音频传导敏感度&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SEC19[&quot;Sec.19 感应信号敏感度&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SEC20[&quot;Sec.20 射频敏感度&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SEC24[&quot;Sec.24 结冰&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SEC25[&quot;Sec.25 静电放电&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SAE[&quot;SAE · 航空航天标准&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  MIL[&quot;MIL · 军用标准&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ARP[&quot;ARP · 推荐实践&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  NASA[&quot;NASA-STD · 航天标准&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  GJB[&quot;GJB · 中国军用标准&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  V_REQ[&quot;阀门级要求&lt;br/&gt;泄漏率 ≤ 1×10⁻⁶ scc/s&lt;br/&gt;响应时间 ≤ 50 ms&lt;br/&gt;寿命 ≥ 设计寿命×1.5&lt;br/&gt;洁净度 ISO 14644 Class 5&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FAA --&gt; FAR25</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FAA --&gt; FAR33</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  EASA --&gt; CS25</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  EASA --&gt; CS_E</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CAAC --&gt; CCAR25</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CAAC --&gt; CCAR33</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FAR25 --&gt; DO160</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FAR33 --&gt; DO160</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CS25 --&gt; DO160</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CS_E --&gt; DO160</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CCAR25 --&gt; DO160</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DO160 --&gt; SEC4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DO160 --&gt; SEC5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DO160 --&gt; SEC6</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DO160 --&gt; SEC7</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DO160 --&gt; SEC8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DO160 --&gt; SEC10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DO160 --&gt; SEC16</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DO160 --&gt; SEC18</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DO160 --&gt; SEC19</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DO160 --&gt; SEC20</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DO160 --&gt; SEC24</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DO160 --&gt; SEC25</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SEC4 --&gt; SAE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SEC8 --&gt; SAE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SEC4 --&gt; MIL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SEC7 --&gt; MIL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SEC8 --&gt; NASA</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SAE --&gt; ARP</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  MIL --&gt; ARP</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SAE --&gt; V_REQ</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  MIL --&gt; V_REQ</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ARP --&gt; V_REQ</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  NASA --&gt; V_REQ</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  GJB --&gt; V_REQ</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p1 fill:rgba(0,122,255,0.08),stroke:rgba(0,122,255,0.4),stroke-width:1px,color:#007AFF</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p2 fill:rgba(255,149,0,0.08),stroke:rgba(255,149,0,0.4),stroke-width:1px,color:#C75B00</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p3 fill:rgba(52,199,89,0.08),stroke:rgba(52,199,89,0.4),stroke-width:1px,color:#248A3D</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p4 fill:rgba(255,45,85,0.08),stroke:rgba(255,45,85,0.4),stroke-width:1px,color:#C01F3D</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p5 fill:rgba(175,82,222,0.08),stroke:rgba(175,82,222,0.4),stroke-width:1px,color:#8944AB</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class FAA,EASA,CAAC p1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class FAR25,FAR33,CS25,CS_E,CCAR25,CCAR33 p2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class DO160,SEC4,SEC5,SEC6,SEC7,SEC8,SEC10,SEC16,SEC18,SEC19,SEC20,SEC24,SEC25 p3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class SAE,MIL,ARP,NASA,GJB p4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class V_REQ p5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br></div></div><blockquote><p>3 大适航当局 · 6 部审定规章 · 12 项 DO-160 Section</p></blockquote></details><hr><h2 id="_6-材料应用矩阵" tabindex="-1">6. 材料应用矩阵 <a class="header-anchor" href="#_6-材料应用矩阵" aria-label="Permalink to &quot;6. 材料应用矩阵&quot;">​</a></h2><details><summary>材料应用矩阵 — 材料-环境-应用的映射关系</summary><p>阀门材料选择需匹配极端服役环境，涵盖金属、非金属和涂层三大类共 13 种典型材料。</p><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subgraph METAL [&quot;金属材料&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    IN718[&quot;Inconel 718&lt;br/&gt;镍基高温合金&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    TI64[&quot;Ti-6Al-4V&lt;br/&gt;钛合金&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    SS316[&quot;316L 不锈钢&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    AL6061[&quot;6061 铝合金&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    BECU[&quot;铍青铜 CuBe&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subgraph NONMETAL [&quot;非金属材料&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    PTFE_M[&quot;PTFE&lt;br/&gt;聚四氟乙烯&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    PEEK_M[&quot;PEEK&lt;br/&gt;聚醚醚酮&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    FFKM_M[&quot;FFKM&lt;br/&gt;全氟醚橡胶&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    FKM_M[&quot;FKM&lt;br/&gt;氟橡胶&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CMC_M[&quot;CMC&lt;br/&gt;陶瓷基复材&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subgraph COATING [&quot;涂层与表面处理&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    TBC_C[&quot;TBC · 热障涂层&lt;br/&gt;YSZ/Gd₂Zr₂O₇&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CRN_C[&quot;CrN/TiN&lt;br/&gt;硬质涂层&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    DLC_C[&quot;DLC&lt;br/&gt;类金刚石涂层&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subgraph ENV [&quot;工作环境&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CRYO[&quot;低温&lt;br/&gt;-253°C (LH2)&lt;br/&gt;-183°C (LOX)&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    HIGH[&quot;高温&lt;br/&gt;+650°C 涡轮进口&lt;br/&gt;+1200°C 燃气&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CORR[&quot;腐蚀&lt;br/&gt;N₂O₄/肼/MMH&lt;br/&gt;绿色推进剂&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    HP[&quot;高压&lt;br/&gt;&gt;35MPa&lt;br/&gt;氦气/氢气&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subgraph APP [&quot;典型应用&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ENG[&quot;发动机阀门&lt;br/&gt;MFV/MOV/FMU&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    PROP[&quot;推进剂阀&lt;br/&gt;RCS/姿控&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    TANK[&quot;增压/贮箱阀&lt;br/&gt;氦气/自生增压&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ACFT[&quot;飞机系统阀&lt;br/&gt;ECS/燃油/液压&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  IN718 --&gt; HIGH --&gt; ENG</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  TI64 --&gt; CRYO --&gt; PROP</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SS316 --&gt; CORR --&gt; PROP</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  AL6061 --&gt; HP --&gt; ACFT</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  BECU --&gt; CRYO --&gt; TANK</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  PTFE_M --&gt; CRYO --&gt; PROP</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  PEEK_M --&gt; HIGH --&gt; ENG</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FFKM_M --&gt; CORR --&gt; PROP</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FKM_M --&gt; HP --&gt; ACFT</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CMC_M --&gt; HIGH --&gt; ENG</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  TBC_C --&gt; HIGH --&gt; ENG</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CRN_C --&gt; HP --&gt; TANK</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DLC_C --&gt; CORR --&gt; PROP</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p1 fill:rgba(0,122,255,0.08),stroke:rgba(0,122,255,0.4),stroke-width:1px,color:#007AFF</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p2 fill:rgba(255,149,0,0.08),stroke:rgba(255,149,0,0.4),stroke-width:1px,color:#C75B00</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p3 fill:rgba(52,199,89,0.08),stroke:rgba(52,199,89,0.4),stroke-width:1px,color:#248A3D</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p4 fill:rgba(255,45,85,0.08),stroke:rgba(255,45,85,0.4),stroke-width:1px,color:#C01F3D</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef p5 fill:rgba(175,82,222,0.08),stroke:rgba(175,82,222,0.4),stroke-width:1px,color:#8944AB</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class IN718,TI64,SS316,AL6061,BECU p2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class PTFE_M,PEEK_M,FFKM_M,FKM_M,CMC_M p3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class TBC_C,CRN_C,DLC_C p4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class CRYO,HIGH,CORR,HP p1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  class ENG,PROP,TANK,ACFT p5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><blockquote><p>13 种材料 · 4 类服役环境 · 4 种典型应用</p></blockquote></details><hr><p><em>（内容由AI生成，仅供参考）</em><em>（内容由AI生成，仅供参考）</em></p>`,23)])])}const u=n(p,[["render",e]]);export{c as __pageData,u as default};
