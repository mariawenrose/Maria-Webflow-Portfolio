const groupCMSItem = () =>{
//group the CMS portfolio items with the same industry value, add a bottom margin to the last one in each group - Maria special design layout request
    const workItems = document.querySelectorAll(".work-item");
    const groups = new Map();

    workItems.forEach(item => {
        const industry = item.querySelector("[data-industry]")?.dataset.industry;
        if (industry) {
            if (!groups.has(industry)) {
                groups.set(industry, []);
            }
            groups.get(industry).push(item);
        }
    });

    groups.forEach(items => {
        if (items.length > 0) {
            items[items.length - 1].style.marginBottom = "1.25rem";
        }
    });
}

export default groupCMSItem;
