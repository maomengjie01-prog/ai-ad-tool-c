'use client';
import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState('zh');
  const [productName, setProductName] = useState('');
  const [features, setFeatures] = useState('');
  const [platform, setPlatform] = useState('Amazon');
  const [textLang, setTextLang] = useState('zh');
  const [result, setResult] = useState({ text: '', image: '', video: '' });
  const [loading, setLoading] = useState({ text: false, image: false, video: false });
  const [points] = useState(50);
  const [showPlans, setShowPlans] = useState(false);

  const t = lang === 'zh' ? {
    title: '三合一电商广告AI工具',
    productName: '产品名称',
    features: '核心卖点',
    platform: '投放平台',
    language: '文案语言',
    generateText: '生成广告文案',
    generateImage: '生成广告图片',
    generateVideo: '生成推广视频',
    textResult: '文案结果',
    imageResult: '图片结果',
    videoResult: '视频结果',
    loading: '生成中...',
    login: '登录',
    plans: '套餐',
    points: '当前积分',
    standard: '标准版 49元 = 1000积分',
    professional: '专业版 199元 = 5000积分',
    premium: '旗舰版 599元 = 8000积分',
    buy: '立即购买',
    noPoints: '积分不足'
  } : {
    title: '3-in-1 Ecommerce AI Ads Tool',
    productName: 'Product Name',
    features: 'Key Features',
    platform: 'Platform',
    language: 'Language',
    generateText: 'Generate Ad Copy',
    generateImage: 'Generate Ad Image',
    generateVideo: 'Generate Ad Video',
    textResult: 'Ad Copy',
    imageResult: 'Ad Image',
    videoResult: 'Ad Video',
    loading: 'Generating...',
    login: 'Login',
    plans: 'Plans',
    points: 'Points',
    standard: 'Standard 49$ = 1000 Points',
    professional: 'Professional 199$ = 5000 Points',
    premium: 'Premium 599$ = 8000 Points',
    buy: 'Buy Now',
    noPoints: 'Not enough points'
  };

  const platforms = ['Amazon', 'Temu', 'TikTok', 'Facebook', 'Instagram'];
  languages = ['zh', 'en', 'es', 'fr', 'de', 'ja', 'ko'];

  const genText = () => {
    if (points < 10) return alert(t.noPoints);
    setLoading(prev => ({ ...prev, text: true }));
    setTimeout(() => {
      setResult(prev => ({ ...prev, text: `【${productName}】\n${features}\n${platform}爆款推荐！` }));
      setLoading(prev => ({ ...prev, text: false }));
    }, 1000);
  };

  const genImage = () => {
    if (points < 50) return alert(t.noPoints);
    setLoading(prev => ({ ...prev, image: true }));
    setTimeout(() => {
      const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(productName + ' ' + features)}`;
      setResult(prev => ({ ...prev, image: url }));
      setLoading(prev => ({ ...prev, image: false }));
    }, 1000);
  };

  const genVideo = () => {
    if (points < 200) return alert(t.noPoints);
    setLoading(prev => ({ ...prev, video: true }));
    setTimeout(() => {
      const url = `https://pollinations.ai/p/${encodeURIComponent(productName + ' ' + features)}`;
      setResult(prev => ({ ...prev, video: url }));
      setLoading(prev => ({ ...prev, video: false }));
    }, 1000);
  };

  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: 20 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <h2>{t.title}</h2>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}>
            {lang === 'zh' ? 'English' : '中文'}
          </button>
          <button>{t.login}</button>
          <button onClick={() => setShowPlans(true)}>{t.plans}</button>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div style={{ border: '1px solid #ddd', padding: 20, borderRadius: 12 }}>
          <h3>{t.productName}</h3>
          <input value={productName} onChange={e => setProductName(e.target.value)} style={{ width: '100%', padding: 10, marginBottom: 10 }} />

          <h3>{t.features}</h3>
          <textarea value={features} onChange={e => setFeatures(e.target.value)} style={{ width: '100%', padding: 10, height: 80, marginBottom: 10 }} />

          <h3>{t.platform}</h3>
          <select value={platform} onChange={e => setPlatform(e.target.value)} style={{ width: '100%', padding: 10, marginBottom: 10 }}>
            {platforms.map(p => <option key={p}>{p}</option>)}
          </select>

          <h3>{t.language}</h3>
          <select value={textLang} onChange={e => setTextLang(e.target.value)} style={{ width: '100%', padding: 10 }}>
            {languages.map(l => <option key={l}>{l}</option>)}
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
          <div style={{ border: '1px solid #ddd', padding: 15, borderRadius: 12 }}>
            <button onClick={genText} disabled={loading.text} style={{ width: '100%', padding: 10 }}>
              {loading.text ? t.loading : t.generateText} (10 {t.points})
            </button>
            <pre style={{ whiteSpace: 'pre-wrap', marginTop: 10 }}>{result.text}</pre>
          </div>

          <div style={{ border: '1px solid #ddd', padding: 15, borderRadius: 12 }}>
            <button onClick={genImage} disabled={loading.image} style={{ width: '100%', padding: 10 }}>
              {loading.image ? t.loading : t.generateImage} (50 {t.points})
            </button>
            {result.image && <img src={result.image} style={{ width: '100%', marginTop: 10 }} />}
          </div>

          <div style={{ border: '1px solid #ddd', padding: 15, borderRadius: 12 }}>
            <button onClick={genVideo} disabled={loading.video} style={{ width: '100%', padding: 10 }}>
              {loading.video ? t.loading : t.generateVideo} (200 {t.points})
            </button>
            {result.video && <iframe src={result.video} style={{ width: '100%', height: 300, marginTop: 10 }} />}
          </div>
        </div>
      </div>

      {showPlans && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', padding: 30, borderRadius: 12, width: 400 }}>
            <h3 style={{ textAlign: 'center' }}>{t.plans}</h3>
            <div style={{ border: '1px solid #ddd', padding: 15, marginBottom: 10, borderRadius: 10 }}>
              <div>{t.standard}</div>
              <button style={{ width: '100%', padding: 10, marginTop: 10, background: '#0071e3', color: '#fff' }}>{t.buy}</button>
            </div>
            <div style={{ border: '1px solid #ddd', padding: 15, marginBottom: 10, borderRadius: 10 }}>
              <div>{t.professional}</div>
              <button style={{ width: '100%', padding: 10, marginTop: 10, background: '#0071e3', color: '#fff' }}>{t.buy}</button>
            </div>
            <div style={{ border: '1px solid #ddd', padding: 15, borderRadius: 10 }}>
              <div>{t.premium}</div>
              <button style={{ width: '100%', padding: 10, marginTop: 10, background: '#0071e3', color: '#fff' }}>{t.buy}</button>
            </div>
            <button onClick={() => setShowPlans(false)} style={{ width: '100%', padding: 10, marginTop: 15 }}>关闭</button>
          </div>
        </div>
      )}
    </main>
  );
}
