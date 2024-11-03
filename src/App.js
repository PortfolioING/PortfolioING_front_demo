// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//    const [data, setData] = useState('');
//    const [error, setError] = useState('');

//    useEffect(() => {
//        axios.get('/api/data')
//            .then(res => {
//                setData(res.data);
//                setError(''); // 오류 초기화
//            })
//            .catch(err => {
//                console.log(err);
//                setError('데이터를 가져오는 데 오류가 발생했습니다.'); // 오류 메시지 설정
//            });
//    }, []);

//    return (
//        <div>
//            받아온 값 : {data}
//            {error && <div style={{color: 'red'}}>{error}</div>} {/* 오류 메시지 표시 */}
//        </div>
//    );
// }

// export default App;
import React from 'react';
import PortfolioDetail from './PortfolioDetail';

function App() {
    const portfolioId = 5; // 예시로 사용할 포트폴리오 ID

    return (
        <div>
            <h1>포트폴리오 애플리케이션</h1>
            <PortfolioDetail portfolioId={portfolioId} />
        </div>
    );
}

export default App;
