class TemplateView {
    constructor() {
        console.log("initialized TemplateView");
        // use tag selector to get the main element
        this.main = document.querySelector("main");
        // use tag selector to get the button
        this.button = document.querySelector("button");
        this.button.onclick = _ => this.changeView(new Date());
    }

    changeView(date) {
        let caption = "Current Date: ";

        // use ES 6 template strings (``)
        this.main.innerHTML = `
        <p>
            <div><span>${caption}</span> ${date} </div>
        </p>
            `;
    }
}

new TemplateView();
