import React, { useState } from 'react';
import { Search, TreePine, BookOpen } from 'lucide-react';

// Define the article data structure
interface Controversy {
  text: string;
  linkText?: string;
  linkUrl?: string;
}

interface Article {
  title: string;
  description: string;
  infobox: {
    age: string;
    gender: string;
    job: string;
    affiliation: string;
    height: string;
  };
  overview: string;
  personality?: string[];
  features: string[];
  habits: string[];
  controversies?: Controversy[];
}

const articlesData: Record<string, Article> = {
  '은단아': {
    title: '은단아',
    description: 'THES 소속사의 유명 여배우. 팬덤은 은방울이다.',
    infobox: {
      age: '30세',
      gender: '여성',
      job: '유명 여배우',
      affiliation: 'THES 소속사',
      height: '168cm'
    },
    overview: 'THES 소속사의 유명 여배우. 연기력과 발음이 훌륭한 배우로 정평이 나 있으며, 긍정적인 사고를 중요시하고 배우라는 직업에 큰 자부심을 가지고 있다. 가장 유명한 대표작으로는 로맨스 구원 서사 드라마 《사랑과 사망의 사이》가 있다.',
    features: [
      '연기력과 발음이 훌륭한 배우',
      '팬덤 이름은 \'은방울\'',
      '가장 유명한 작품은 로맨스 구원 서사 드라마 \'사랑과 사망의 사이\''
    ],
    habits: [
      '웃을 때 입을 가리고 웃음',
      '당황하거나 놀라면 입술을 오므리고 눈을 크게 뜸'
    ],
    controversies: [
      {
        text: '아이돌 금태휘와 사귄다는 소문이 있다.',
        linkText: '[해당 뉴스 링크]',
        linkUrl: 'https://share.crack.wrtn.ai/fej38se'
      }
    ]
  },
  '금태휘': {
    title: '금태휘',
    description: 'THES 소속 남자 아이돌 그룹 Suntrip의 멤버.',
    infobox: {
      age: '29세',
      gender: '남성',
      job: '아이돌 (Suntrip 랩 담당)',
      affiliation: 'THES 소속사',
      height: '188cm'
    },
    overview: 'THES 소속사 남자아이돌 그룹 \'Suntrip\'의 멤버로, 팀 내에서 랩을 담당하고 있다. 랩과 춤 실력이 상당히 뛰어나며 팬들에게 매너가 매우 좋은 것으로 유명하다.',
    features: [
      '팬덤 이름 \'여행자\'',
      '가장 유명한 솔로곡은 \'To the sun\'',
      '랩과 춤 실력이 상당히 뛰어남',
      '팬들에게 매너가 매우 좋음'
    ],
    habits: [
      '웃을 때 자신의 눈을 가리고 입 크게 웃음',
      '상대에게 설레면 입술을 혀로 핥음'
    ],
    controversies: [
      {
        text: '2021년, 수레를 끌던 할머니의 수레를 빼앗으려고 하는 장면을 누군가가 목격했다고 진술했다. 소속사 측에서는 사실 무근이라며, 금태휘는 할머니를 도우려고 한 행동이었다고 밝혔다.'
      },
      {
        text: '2022년 12월, 클럽에서 일반인 여성과 술을 마셨다는 소문이 있다. 소속사 측에서는 사실 무근이라 밝혔다.'
      },
      {
        text: '2023년 1월, 금태휘의 누나가 깡패라는 소문이 있다. 금태휘는 자신의 누나는 성실하게 사회 활동을 하는 사회인이라고 밝혔다.'
      },
      {
        text: '배우 은단아와 열애설이 터졌다.',
        linkText: '[해당 뉴스 링크]',
        linkUrl: 'https://share.crack.wrtn.ai/fej38se'
      }
    ]
  },
  '공이후': {
    title: '공이후',
    description: 'TC방송국 소속의 예능 PD. 인기 프로그램 Les go 연출.',
    infobox: {
      age: '26세',
      gender: '여성',
      job: '방송국 PD',
      affiliation: 'TC방송국',
      height: '175cm'
    },
    overview: 'TC방송국 소속의 예능 PD. 현재 전세계적으로 큰 인기를 끌고 있는 레즈비언 연애 프로그램 《Les go》의 메인 연출을 맡아 진행하고 있다.',
    features: [
      '현재 전세계적으로 인기있는 레즈비언 연애 프로그램 \'Les go\'를 진행 중'
    ],
    habits: [
      '화가 나면 헛웃음침',
      '상대에게 설레면 뒷목을 매만짐'
    ]
  }
};

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'article' | 'community'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setActiveArticle(searchQuery.trim());
      setCurrentView('article');
    }
  };

  const goToArticle = (title: string) => {
    setSearchQuery(title);
    setActiveArticle(title);
    setCurrentView('article');
  };

  const goHome = () => {
    setCurrentView('home');
    setSearchQuery('');
    setActiveArticle('');
  };

  return (
    <div className="min-h-screen bg-[#f9f8fd] text-[#333333] font-['Helvetica_Neue',Arial,sans-serif] flex flex-col overflow-hidden">
      {/* Header / Nav Bar (Namuwiki Style) */}
      <nav className="bg-[#7232af] text-white px-5 h-[50px] flex items-center justify-between shadow-[0_2px_4px_rgba(0,0,0,0.1)] shrink-0 z-10">
        <div className="flex items-center gap-5 font-bold text-[18px]">
          <button onClick={goHome} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span>Tiredtree</span>
          </button>
          <span className="text-[12px] font-normal opacity-80 hidden md:inline">최근 변경 · 최근 토론 · 특수 기능</span>
        </div>
        <div className="flex gap-[15px] text-[14px]">
          <button className="hover:opacity-80">로그인</button>
          <button className="hover:opacity-80">설정</button>
          <button className="hover:opacity-80">다크모드</button>
        </div>
      </nav>

      {/* Layout Grid */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-[240px] bg-white border-r border-[#e0d7ed] p-5 flex flex-col gap-[15px] shrink-0 overflow-y-auto hidden md:flex">
          <div className="border-b border-[#e0d7ed] pb-2.5">
            <div className="text-[12px] text-[#7232af] font-bold uppercase mb-2">바로가기</div>
            <button onClick={goHome} className="block text-[14px] text-[#555] hover:text-[#7232af] py-1 text-left w-full">대문</button>
            <button className="block text-[14px] text-[#555] hover:text-[#7232af] py-1 text-left w-full">최근 변경</button>
            <button className="block text-[14px] text-[#555] hover:text-[#7232af] py-1 text-left w-full">최근 토론</button>
          </div>
          <div className="border-b border-[#e0d7ed] pb-2.5">
            <div className="text-[12px] text-[#7232af] font-bold uppercase mb-2">실시간 검색어</div>
            {['은단아', '금태휘', '공이후', '나무위키', '포털 사이트'].map((term, i) => (
              <button key={term} onClick={() => goToArticle(term)} className="block text-[14px] text-[#555] hover:text-[#7232af] py-1 text-left w-full">
                {i + 1}. {term}
              </button>
            ))}
          </div>
          <div>
            <div className="text-[12px] text-[#7232af] font-bold uppercase mb-2">커뮤니티</div>
            <button onClick={() => setCurrentView('community')} className="block text-[14px] text-[#555] hover:text-[#7232af] py-1 text-left w-full">자유게시판</button>
            <button className="block text-[14px] text-[#555] hover:text-[#7232af] py-1 text-left w-full">문의사항</button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-10 flex flex-col items-center">
          {currentView === 'home' ? (
            <>
              {/* Google-style Hero Section */}
              <div className="mt-10 text-center w-full max-w-[600px]">
                <h1 className="text-[82px] font-black text-[#7232af] tracking-[-2px] mb-5 font-['Georgia',serif]">
                  Tiredtree
                </h1>
                <form onSubmit={handleSearch} className="relative w-full">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-[18px] px-[25px] rounded-[30px] border-2 border-[#7232af] text-[18px] shadow-[0_4px_12px_rgba(114,50,175,0.1)] outline-none focus:ring-2 focus:ring-[#f3e8ff]"
                    placeholder="검색어를 입력하세요"
                    autoFocus
                  />
                </form>
                <div className="mt-5 flex justify-center items-center gap-3 text-[14px] flex-wrap">
                  <span className="text-[#888] font-semibold">연관:</span>
                  {['은단아', '금태휘', '공이후'].map((term) => (
                    <button
                      key={term}
                      onClick={() => goToArticle(term)}
                      className="px-4 py-2 bg-[#f3e8ff] text-[#4c2277] rounded-[20px] font-medium border border-transparent hover:border-[#7232af] transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Featured Entries (The Search Results Preview) */}
              <div className="mt-[60px] w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5">
                {Object.values(articlesData).map((article) => (
                  <button 
                    key={article.title}
                    onClick={() => goToArticle(article.title)}
                    className="bg-white border border-[#e0d7ed] rounded-xl overflow-hidden flex flex-col h-[180px] text-left hover:shadow-md transition-shadow"
                  >
                    <div className="p-4 flex-1">
                      <div className="text-[18px] font-bold text-[#4c2277] mb-2">{article.title}</div>
                      <div className="text-[14px] text-[#777] leading-[1.5] line-clamp-3">{article.description}</div>
                    </div>
                    <div className="bg-[#f1f1f1] px-4 py-2 text-[12px] border-t border-[#e0d7ed] flex justify-between text-[#555] w-full">
                      <span>조회수 {(Math.random() * 10 + 1).toFixed(1)}k</span>
                      <span>방금 전</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-10 pb-5 text-[12px] text-[#999] text-center">
                &copy; 2024 Tiredtree. All rights reserved. 본 사이트는 위키 백과 형식의 포털입니다.
              </div>
            </>
          ) : currentView === 'article' ? (
            /* Article View */
            <div className="w-full max-w-5xl bg-white border border-[#e0d7ed] shadow-sm min-h-[80vh] rounded-lg overflow-hidden">
              <div className="p-8">
                <div className="flex justify-between items-end mb-2 border-b-2 border-[#e0d7ed] pb-4">
                  <h1 className="text-4xl font-normal text-[#333]">{activeArticle}</h1>
                  <form onSubmit={handleSearch} className="relative w-64">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full py-2 px-4 rounded-full border border-[#e0d7ed] text-sm outline-none focus:border-[#7232af]"
                      placeholder="문서 검색..."
                    />
                    <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Search className="w-4 h-4 text-[#999]" />
                    </button>
                  </form>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#777] mb-6">
                  <BookOpen className="w-4 h-4" />
                  <span>최근 수정 시각: {new Date().toLocaleString('ko-KR')}</span>
                </div>

                {articlesData[activeArticle] ? (
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Content */}
                    <div className="flex-1 order-2 md:order-1 text-[#333] leading-relaxed">
                      <div className="bg-[#f9f8fd] border border-[#e0d7ed] rounded p-4 mb-6 inline-block min-w-[250px]">
                        <div className="font-bold mb-2 text-[#4c2277]">목차</div>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-[#7232af]">
                          <li><a href="#개요" className="hover:underline">개요</a></li>
                          {articlesData[activeArticle].personality && <li><a href="#성격" className="hover:underline">성격</a></li>}
                          <li><a href="#특징" className="hover:underline">특징 및 커리어</a></li>
                          <li><a href="#습관" className="hover:underline">습관 및 여담</a></li>
                          {articlesData[activeArticle].controversies && <li><a href="#논란" className="hover:underline">논란</a></li>}
                        </ol>
                      </div>

                      <h2 id="개요" className="text-2xl font-bold border-b border-[#e0d7ed] pb-1 mb-4 text-[#4c2277] flex items-center gap-2">
                        <span className="text-[#7232af] text-lg">1.</span> 개요
                      </h2>
                      <p className="mb-6">
                        {articlesData[activeArticle].overview}
                      </p>

                      {articlesData[activeArticle].personality && (
                        <>
                          <h2 id="성격" className="text-2xl font-bold border-b border-[#e0d7ed] pb-1 mb-4 text-[#4c2277] flex items-center gap-2">
                            <span className="text-[#7232af] text-lg">2.</span> 성격
                          </h2>
                          <ul className="list-disc list-inside space-y-1 mb-6">
                            {articlesData[activeArticle].personality.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      <h2 id="특징" className="text-2xl font-bold border-b border-[#e0d7ed] pb-1 mb-4 text-[#4c2277] flex items-center gap-2">
                        <span className="text-[#7232af] text-lg">{articlesData[activeArticle].personality ? '3.' : '2.'}</span> 특징 및 커리어
                      </h2>
                      <ul className="list-disc list-inside space-y-1 mb-6">
                        {articlesData[activeArticle].features.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>

                      <h2 id="습관" className="text-2xl font-bold border-b border-[#e0d7ed] pb-1 mb-4 text-[#4c2277] flex items-center gap-2">
                        <span className="text-[#7232af] text-lg">{articlesData[activeArticle].personality ? '4.' : '3.'}</span> 습관 및 여담
                      </h2>
                      <ul className="list-disc list-inside space-y-1 mb-6">
                        {articlesData[activeArticle].habits.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>

                      {articlesData[activeArticle].controversies && (
                        <>
                          <h2 id="논란" className="text-2xl font-bold border-b border-[#e0d7ed] pb-1 mb-4 text-[#4c2277] flex items-center gap-2">
                            <span className="text-[#7232af] text-lg">{articlesData[activeArticle].personality ? '5.' : '4.'}</span> 논란
                          </h2>
                          <ul className="list-decimal list-inside space-y-2 mb-6">
                            {articlesData[activeArticle].controversies.map((item, idx) => (
                              <li key={idx}>
                                {item.text}
                                {item.linkText && item.linkUrl && (
                                  <a href={item.linkUrl} target="_blank" rel="noopener noreferrer" className="text-[#7232af] hover:underline ml-1 font-medium">
                                    {item.linkText}
                                  </a>
                                )}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>

                    {/* Infobox (Right Sidebar) */}
                    <div className="w-full md:w-[320px] order-1 md:order-2 shrink-0">
                      <div className="border border-[#e0d7ed] rounded overflow-hidden">
                        <div className="bg-[#7232af] text-white text-center py-2 font-bold text-lg">
                          {articlesData[activeArticle].title}
                        </div>
                        <table className="w-full text-sm">
                          <tbody>
                            <tr className="border-b border-[#e0d7ed]">
                              <th className="bg-[#f9f8fd] text-[#4c2277] py-2 px-3 text-left w-24 border-r border-[#e0d7ed]">이름</th>
                              <td className="py-2 px-3 bg-white">{articlesData[activeArticle].title}</td>
                            </tr>
                            <tr className="border-b border-[#e0d7ed]">
                              <th className="bg-[#f9f8fd] text-[#4c2277] py-2 px-3 text-left w-24 border-r border-[#e0d7ed]">나이</th>
                              <td className="py-2 px-3 bg-white">{articlesData[activeArticle].infobox.age}</td>
                            </tr>
                            <tr className="border-b border-[#e0d7ed]">
                              <th className="bg-[#f9f8fd] text-[#4c2277] py-2 px-3 text-left w-24 border-r border-[#e0d7ed]">성별</th>
                              <td className="py-2 px-3 bg-white">{articlesData[activeArticle].infobox.gender}</td>
                            </tr>
                            <tr className="border-b border-[#e0d7ed]">
                              <th className="bg-[#f9f8fd] text-[#4c2277] py-2 px-3 text-left w-24 border-r border-[#e0d7ed]">신장</th>
                              <td className="py-2 px-3 bg-white">{articlesData[activeArticle].infobox.height}</td>
                            </tr>
                            <tr className="border-b border-[#e0d7ed]">
                              <th className="bg-[#f9f8fd] text-[#4c2277] py-2 px-3 text-left w-24 border-r border-[#e0d7ed]">직업</th>
                              <td className="py-2 px-3 bg-white">{articlesData[activeArticle].infobox.job}</td>
                            </tr>
                            <tr>
                              <th className="bg-[#f9f8fd] text-[#4c2277] py-2 px-3 text-left w-24 border-r border-[#e0d7ed]">소속</th>
                              <td className="py-2 px-3 bg-white">{articlesData[activeArticle].infobox.affiliation}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="py-12 text-center text-[#777]">
                    <TreePine className="w-16 h-16 mx-auto text-[#e0d7ed] mb-4" />
                    <h2 className="text-2xl font-bold text-[#333] mb-2">해당 문서를 찾을 수 없습니다.</h2>
                    <p className="mb-6">'{activeArticle}' 문서가 존재하지 않습니다. 새로운 문서를 작성해보시겠습니까?</p>
                    <button className="px-6 py-2 bg-[#7232af] text-white rounded font-medium hover:bg-[#4c2277] transition-colors">
                      새 문서 만들기
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Community View */
              <div className="w-full max-w-5xl bg-white border border-[#e0d7ed] shadow-sm min-h-[80vh] rounded-lg overflow-hidden flex flex-col">
                <div className="bg-[#7232af] text-white px-6 py-4 font-bold text-xl">
                  자유게시판
                </div>
                
                {/* Post Header */}
                <div className="p-6 border-b border-[#e0d7ed]">
                  <h1 className="text-2xl font-bold text-[#333] mb-3">실화냐? 은단아랑 금태휘 열애설 남;</h1>
                  <div className="flex items-center text-sm text-[#777] gap-4">
                    <span className="font-medium text-[#4c2277]">ㅇㅇ</span>
                    <span>|</span>
                    <span>{new Date().toLocaleDateString('ko-KR')} {new Date().toLocaleTimeString('ko-KR', {hour: '2-digit', minute:'2-digit'})}</span>
                    <span>|</span>
                    <span>조회 14,258</span>
                    <span>|</span>
                    <span>추천 342</span>
                  </div>
                </div>

                {/* Post Body */}
                <div className="p-6 min-h-[200px] text-[16px] text-[#333] leading-relaxed border-b border-[#e0d7ed]">
                  아니 ㅁㅊ 진짜임? 은단아가 아깝다
                </div>

                {/* Comments Section */}
                <div className="bg-[#f9f8fd] p-6 flex-1">
                  <h3 className="font-bold text-[#4c2277] mb-4">댓글 <span className="text-[#7232af]">6</span></h3>
                  
                  <div className="space-y-0 border-t border-[#e0d7ed]">
                    {/* Comment 1 */}
                    <div className="py-3 border-b border-[#e0d7ed]">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm text-[#333]">ㅇㅇ</span>
                        <span className="text-xs text-[#999]">14:22</span>
                      </div>
                      <div className="text-[14px] text-[#333]">ㄹㅇ;; 왜 사귐 대체?</div>
                    </div>

                    {/* Comment 2 */}
                    <div className="py-3 border-b border-[#e0d7ed]">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm text-[#333]">ㅇㅇ</span>
                        <span className="text-xs text-[#999]">14:25</span>
                      </div>
                      <div className="text-[14px] text-[#333]">가짜뉴스 아님?</div>
                    </div>

                    {/* Nested Comment */}
                    <div className="py-3 border-b border-[#e0d7ed] pl-8 bg-[#f3e8ff] bg-opacity-30 relative">
                      <div className="absolute left-3 top-4 text-[#7232af]">└</div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm text-[#333]">ㅇㅇ</span>
                        <span className="text-xs text-[#999]">14:26</span>
                      </div>
                      <div className="text-[14px] text-[#333]">가짜뉴스겠냐; 금태휘 행실을 봐라</div>
                    </div>

                    {/* Comment 3 */}
                    <div className="py-3 border-b border-[#e0d7ed]">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm text-[#333]">ㅇㅇ</span>
                        <span className="text-xs text-[#999]">14:30</span>
                      </div>
                      <div className="text-[14px] text-[#333]">요즘것들은 이래서 안댄다.</div>
                    </div>

                    {/* Comment 4 */}
                    <div className="py-3 border-b border-[#e0d7ed]">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm text-[#333]">ㅇㅇ</span>
                        <span className="text-xs text-[#999]">14:35</span>
                      </div>
                      <div className="text-[14px] text-[#333]">ㅉㅉ둘이 사귀든 말든 주식이 문제임</div>
                    </div>

                    {/* Comment 5 */}
                    <div className="py-3 border-b border-[#e0d7ed]">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm text-[#333]">ㅇㅇ</span>
                        <span className="text-xs text-[#999]">14:42</span>
                      </div>
                      <div className="text-[14px] text-[#333]">우리 오빠가 뭐 어때서요?</div>
                    </div>
                  </div>

                  {/* Comment Input */}
                  <div className="mt-6 flex gap-2">
                    <input type="text" placeholder="댓글을 남겨보세요." className="flex-1 border border-[#e0d7ed] rounded p-2 text-sm outline-none focus:border-[#7232af]" />
                    <button className="bg-[#7232af] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#4c2277]">등록</button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    );
}
