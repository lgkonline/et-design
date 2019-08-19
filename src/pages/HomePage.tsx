import React from "react";

import { HorizontalScroll } from "../components/HorizontalScroll";

export function HomePage() {
    // const recentWinnings = [
    //     {
    //         case: "https://so2.money/wp-content/uploads/2019/05/treasure2.png",
    //         skin: "https://so2.money/wp-content/uploads/2019/07/cyber.png",
    //         color: "rgb(158, 158, 158)"
    //     },
    //     {
    //         case: "https://so2.money/wp-content/uploads/2019/05/treasure2.png",
    //         skin: "https://so2.money/wp-content/uploads/2019/07/unikarambit.png",
    //         color: "rgb(206, 170, 96)"
    //     },
    //     {
    //         case: "https://so2.money/wp-content/uploads/2019/07/ASTROCASE.png",
    //         skin: "https://so2.money/wp-content/uploads/2019/07/m40beag.png",
    //         color: "rgb(158, 158, 158)"
    //     },
    //     {
    //         case: "https://so2.money/wp-content/uploads/2019/07/testcase.png",
    //         skin: "https://so2.money/wp-content/uploads/2019/06/SM1014NEC.png",
    //         color: "rgb(33, 150, 243)"
    //     },
    //     {
    //         case: "https://so2.money/wp-content/uploads/2019/07/ASTROCASE.png",
    //         skin: "https://so2.money/wp-content/uploads/2019/07/Rail.png",
    //         color: "rgb(156, 39, 176)"
    //     },
    //     {
    //         case: "https://so2.money/wp-content/uploads/2019/05/treasure2.png",
    //         skin: "https://so2.money/wp-content/uploads/2019/07/cyber.png",
    //         color: "rgb(158, 158, 158)"
    //     },
    //     {
    //         case: "https://so2.money/wp-content/uploads/2019/06/ak-dream.png",
    //         skin: "https://so2.money/wp-content/uploads/2019/06/test4.png",
    //         color: "rgb(244, 67, 54)"
    //     }
    // ];

    return (
        <div>
            <h1 className="mt-4 mb-3">Home</h1>

            {/* <HorizontalScroll className="recent-win-list mb-3">
                {recentWinnings.map((pick, index) =>
                    <div
                        key={index}
                        className="recent-win position-relative"
                        style={{ color: pick.color }}
                    >
                        <div className="recent-win-case" style={{ backgroundImage: `url(${pick.case})` }} />
                        <div className="recent-win-skin" style={{ backgroundImage: `url(${pick.skin})` }} />
                    </div>
                )}
            </HorizontalScroll> */}

            <HorizontalScroll className="mb-3">
                {[...Array(16)].map((j, i) => (
                    <div key={i} className="bg-primary" style={{
                        minWidth: "150px",
                        height: "150px",
                        border: "2px solid black"
                    }} />
                ))}
            </HorizontalScroll>

            <div className="row">
                <div className="col-md-6">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,</p>
                </div>
            </div>
        </div>
    );
}