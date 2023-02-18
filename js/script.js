var subTypeElement = document.querySelector("#subscription"),
	subDurationElement = document.querySelector("#months"),
	result = document.querySelector(".result"),
	subType = "basic",
	subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
	subType = e.target.value;
	// console.log(subType);
	updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
	subDuration = Number(e.target.value);
	// console.log(subDuration);
	updateSubscriptionDiv();
});

function updateSubscriptionDiv() {
	var monthlyCost = 5;

	if (subType === "standard") {
		monthlyCost = 7;
	} else if (subType === "premium") {
		monthlyCost = 10;
	}

	var total = subDuration * monthlyCost;
	result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
}