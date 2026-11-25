// 决策引擎（简化版）
function decide(input) {
  return { action: "维持现状", margin: 0 };
}

if (typeof module !== "undefined") {
  module.exports = { decide };
}
