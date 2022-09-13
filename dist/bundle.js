!async function () {
    let t = new DOMParser;
    console.log("Running popn class script, KIMSM ver.", "v0.1");
    const e = { a: 5e3, b: 5e3, c: 5e3, d: 5e3, e: 3e3, f: 3e3, g: 3e3, h: 0, i: 0, j: 0, k: 3e3, none: 0 },
        n = "https://p.eagate.573.jp/game/popn/riddles/playdata",
        l = "https://eacache.s.konaminet.jp/game/popn/riddles/images/p/common/medal";

    function d(t) {
        return t.arrayBuffer().then((e => t.headers.get("Content-Type").includes("UTF-8")
            ? (new TextDecoder).decode(e)
            : new TextDecoder("Shift_JIS").decode(e)))
    }
    const a = [
        [0, 50],
        [1, 50],
        [0, 49],
        [1, 49],
        [2, 49],
        [3, 49],
        [4, 49],
        [5, 49],
        [0, 48],
        [1, 48],
        [2, 48],
        [3, 48],
        [4, 48],
        [5, 48],
        [6, 48],
        [7, 48],
        [8, 48],
        [9, 48],
        [0, 47],
        [1, 47],
        [2, 47],
        [3, 47],
        [4, 47],
        [5, 47],
        [6, 47],
        [7, 47],
        [8, 47],
        [9, 47],
        [0, 46],
        [1, 46],
        [2, 46],
        [3, 46],
        [4, 46],
        [5, 46],
        [6, 46],
        [7, 46],
        [8, 46],
        [9, 46],
        [0, 45],
        [1, 45],
        [2, 45],
        [3, 45],
        [4, 45],
        [5, 45],
        [6, 45],
        [7, 45],
        [8, 45],
        [9, 45],
        [0, 44],
        [1, 44],
        [2, 44],
        [3, 44],
        [4, 44],
        [5, 44],
        [6, 44],
        [7, 44],
        [8, 44],
        [0, 43],
        [1, 43],
        [2, 43],
        [3, 43],
        [4, 43],
        [5, 43],
        [6, 43],
        [7, 43],
        [8, 43],
        [9, 43],
        [0, 42],
        [1, 42],
        [2, 42],
        [3, 42],
        [4, 42],
        [5, 42],
        [6, 42],
        [7, 42],
        [8, 42],
        [9, 42],
        [10, 42],
        [0, 41],
        [1, 41],
        [2, 41],
        [3, 41],
        [4, 41],
        [5, 41],
        [6, 41],
        [7, 41],
        [8, 41],
        [9, 41],
        [10, 41],
        [11, 41]
    ].map((([a, o]) =>
        function (n, a) {
            return fetch(n)
                .then(d)
                .then((e => t.parseFromString(e, "text/html")))
                .then((t => t.querySelectorAll("ul.mu_list_table > li")))
                .then((t => Array.from(t).filter((t => t.firstElementChild.className.startsWith("col")))
                    .map((t => [t.children[3].textContent, t.children[3].firstChild.src.replace(l + "/meda_", "").replace(".png", ""), t.firstElementChild.lastElementChild.textContent, t.firstElementChild.firstElementChild.textContent]))
                    .map((([t, n, l, d]) => ({ song: d, genre: l, score: t, medal: n, level: a, point: t < 5e4 ? 0 : Math.floor(100 * (1e4 * a + parseInt(t) - 5e4 + e[n]) / 5440) / 100 })))))
        }(`${n}/mu_lv.html?page=${a}&level=${o}`, o))),
        o = await fetch(n + "/index.html")
        .then(d)
        .then((e => t.parseFromString(e, "text/html")))
        .then((t => t.querySelector("#status_table > div.st_box > div:nth-child(2)").textContent)), 
        i = (await Promise.all(a)).flat().sort(((t, e) => e.point - t.point)).slice(0, 50);
        console.log({ s: i });
        const r = i.reduce(((t, e) => t + e.point), 0) / 50, h = document.createElement("div");
        h.id = "pokkura", h.innerHTML = `\n  <style scoped>\n  .pokura {\n    display: flex;\n    justify-content: center;\n  }\n  .pokuraTable {\n    background-color: #feffb7;\n    border-collapse: collapse;\n  }\n  .pokuraTable:first-child {\n    margin-right: 10px;\n  }\n  .pokuraTable tr {\n    border-bottom: 2px solid #d82f66;\n  }\n  .pokuraTable th {\n    padding: 4px;\n  }\n  .pokuraTable td {\n    padding: 0 4px;\n  }\n  .pokuraTable td img {\n    vertical-align: middle;\n  }\n  .profileTable {\n    margin: 10px auto;\n    font-size: 14px;\n  }\n  .profileTable td {\n    padding: 5px;\n  }\n  .profileTable td:first-child {\n    font-weight: bold;\n  }\n  .footnote {\n    font-size: 10px;\n    margin: 8px auto;\n    color: gray;\n    text-align: center;\n  }\n  @media (max-width: 768px) {\n    .pokura {\n      flex-direction: column;\n    }\n    .pokuraTable {\n      width: 100%;\n      margin-bottom: 20px;\n    }\n    .profileTable {\n      width: auto;\n    }\n    .pokuraTable th:first-child,td:first-child {\n      min-width: 20px;\n    }\n    .pokuraTable th:nth-child(4),td:nth-child(4) {\n      min-width: 40px;\n    }\n    .pokuraTable th:nth-child(5),td:nth-child(5) {\n      min-width: 40px;\n    }\n    .pokuraTable th:nth-child(6),td:nth-child(6) {\n      min-width: 50px;\n    }\n  }\n  </style>\n  <table class="pokuraTable profileTable"><tr><td>プレーヤー名</td><td>${o}</td></tr><tr><td>ポックラ</td><td>${(Math.floor(100 * r) / 100).toFixed(2)}</td></tr><tr><td>+0.01まであと</td><td>${Math.ceil(5440 * (1 - 100 * r % 1) * 50 / 100)}</td></tr></table>\n  <div class="pokura">\n  <table class="pokuraTable">\n    <tr><th>LV</th><th>ジャンル</th><th>曲名</th><th>スコア</th><th>メダル</th><th>ポックラ</th></tr>\n    ${i.slice(0, 25).map((t => `<tr><td>${t.level}</td><td>${t.genre}</td><td>${t.song}</td><td>${t.score}</td><td><img src="${l}/meda_${t.medal}.png"></td><td>${t.point.toFixed(2)}</td></tr>`)).join("")}\n  </table>\n  <table class="pokuraTable">\n    <tr><th>LV</th><th>ジャンル</th><th>曲名</th><th>スコア</th><th>メダル</th><th>ポックラ</th></tr>\n    ${i.slice(25).map((t => `<tr><td>${t.level}</td><td>${t.genre}</td><td>${t.song}</td><td>${t.score}</td><td><img src="${l}/meda_${t.medal}.png"></td><td>${t.point.toFixed(2)}</td></tr>`)).join("")}\n  </table>\n  </div>\n  <div class="footnote">팝클 스크립트 by kimsm. v0.1</div>\n  `, document.body.innerHTML = "", document.body.appendChild(h)
}();