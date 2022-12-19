import React, { useState } from "react";

const createArr = (n) => {
    const iArr = [];
    for (let i = 0; i < n; i++) iArr[i] = i + 1;
    return iArr; //새로운 배열을 만들기 위한 함수
};

const Page = ({ total, limit, page, setPage }) => {
    const [blocknumber, setBlockNumber] = useState(0);
    const numPages = Math.ceil(total / limit);
    const pageLimit = 8; // 한번에 몇페이지까지?

    const blockArea = blocknumber * pageLimit;
    const nArr = createArr(numPages);
    const pArr = nArr.slice(blockArea, blockArea + pageLimit); //한 블럭 페이지 슬라이스
    const prePage = () => {
        if (page <= 1) return;
        else if (page - 1 <= pageLimit * blocknumber) {
            setBlockNumber((num) => num - 1);
        }
    };
    const nextPage = () => {
        if (page >= numPages) return;
        else if (pageLimit * (blocknumber + 1) < page + 1) {
            setBlockNumber((num) => num + 1);
        }
    };

    return (
        <div className="page">
            <div>
                Page {page}/{numPages}
            </div>
            <button
                onClick={() => {
                    setPage(page - 1);
                    prePage();
                }}
                disabled={page === 1}
            >
                &lt;
            </button>

            {pArr.map((num) => (
                <button
                    key={num}
                    onClick={() => {
                        setPage(num);
                    }}
                >
                    {num}
                </button>
            ))}
            <button
                onClick={() => {
                    setPage(page + 1);
                    nextPage();
                }}
                disabled={page === numPages}
            >
                &gt;
            </button>
        </div>
    );
};

export default Page;
