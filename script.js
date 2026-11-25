const out = document.getElementById("output");
const result = decide({ price: 99, churn: 0.05 });
out.textContent = "建议：" + result.action;
