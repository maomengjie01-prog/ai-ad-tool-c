export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>AI 广告生成工具</h1>
      <p>当前积分：50</p>

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <button style={{ padding: 10, flex: 1 }}>文案 10积分</button>
        <button style={{ padding: 10, flex: 1 }}>图片 50积分</button>
        <button style={{ padding: 10, flex: 1 }}>视频 200积分</button>
      </div>

      <div style={{ marginTop: 30 }}>
        <div style={{ border: "1px solid #ddd", padding: 15, marginBottom: 10 }}>
          <div>标准版 49元 = 1000积分</div>
          <button style={{ width: "100%", padding: 10, marginTop: 10, background: "#0071e3", color: "#fff" }}>立即购买</button>
        </div>
        <div style={{ border: "1px solid #ddd", padding: 15, marginBottom: 10 }}>
          <div>专业版 199元 = 5000积分</div>
          <button style={{ width: "100%", padding: 10, marginTop: 10, background: "#0071e3", color: "#fff" }}>立即购买</button>
        </div>
        <div style={{ border: "1px solid #ddd", padding: 15, marginBottom: 10 }}>
          <div>旗舰版 599元 = 8000积分</div>
          <button style={{ width: "100%", padding: 10, marginTop: 10, background: "#0071e3", color: "#fff" }}>立即购买</button>
        </div>
      </div>
    </main>
  );
}
