import React, { useState } from "react";

function infitityScroll() {
    // 模拟100条数据
    var count = 0;
    var list = Array.from({ length: 100 }, () => {
        return count++;
    });

    var liHeight = 50, // 单个li高度
        liMarginTop = 10, // li的marginTop
        viewHeight = 200, // 视口高度
        viewWidth = 200, // 视口宽度
        showLiCount = parseInt(viewHeight / (liHeight + liMarginTop)) + 1; // 视口内盛放的li个数

    const [nowList, setNowList] = useState(list.slice(0, showLiCount));
    const [ulTop, setUlTop] = useState(0); // 内部第二个ul距离容器的距离
    const [ulHeight, setUlHeight] = useState(
        // 计算所有li的总的高度
        list.length * liHeight + (list.length + 1) * liMarginTop
    );
    const ulContainer = React.createRef();

    return (
        <div
            style={{
                height: viewHeight + "px",
                width: viewWidth + "px",
                border: "1px solid",
                position: "relative",
                overflow: "auto"
            }}
            ref={ulContainer}
            onScroll={() => {
                var nowTop = ulContainer.current.scrollTop;
                setUlTop(nowTop - (nowTop % (liHeight + liMarginTop)));
                var start = parseInt(nowTop / (liHeight + liMarginTop));
                setNowList(list.slice(start, start + showLiCount));
            }}
        >
            <ul style={{ margin: 0, padding: 0, height: ulHeight + "px" }}></ul>
            <ul
                style={{
                    margin: 0,
                    position: "absolute",
                    listStyleType: "none",
                    top: ulTop + "px",
                    width: "100%",
                    boxSizing: "border-box",
                    padding: 0
                }}
            >
                {nowList.map((item, index) => {
                    return (
                        <li
                            key={index}
                            style={{
                                backgroundColor: "yellow",
                                marginLeft: 10,
                                marginRight: 10,
                                height: liHeight + "px",
                                marginTop: liMarginTop + "px"
                            }}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default infitityScroll;
