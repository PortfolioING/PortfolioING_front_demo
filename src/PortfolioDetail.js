import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PortfolioDetail({ portfolioId }) {
    const [portfolio, setPortfolio] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        // 특정 포트폴리오의 세부 내용 조회
        axios.get(`/api/portfolios/${portfolioId}`)
            .then(res => {
                setPortfolio(res.data); // 받아온 데이터로 상태 업데이트
                setError(''); // 오류 초기화
            })
            .catch(err => {
                console.error(err);
                setError('포트폴리오 정보를 가져오는 데 오류가 발생했습니다.');
            });
    }, [portfolioId]);

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>; // 오류 메시지 표시
    }

    if (!portfolio) {
        return <div>로딩 중...</div>; // 데이터 로딩 중 표시
    }

    return (
        <div>
            <h2>포트폴리오 상세 정보</h2>
            <p><strong>포트폴리오 ID:</strong> {portfolio.portfolioId}</p>
            <p><strong>사용자 ID:</strong> {portfolio.userId}</p>
            <p><strong>설문조사 ID:</strong> {portfolio.surveyId}</p>
            <p><strong>템플릿 ID:</strong> {portfolio.templateId}</p>
            <p><strong>제목:</strong> {portfolio.title}</p>
            <p><strong>설명:</strong> {portfolio.description}</p>
            <p><strong>생성일:</strong> {portfolio.createdAt}</p>
            <p><strong>수정일:</strong> {portfolio.updatedAt}</p>
        </div>
    );
}

export default PortfolioDetail;
