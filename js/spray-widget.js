window.sprayWidget = (() => {
  const sprayClasses = [
    "pri",
    "pri.text",
    "pri.hover",
    "pri.bordered",
    "pri.trans-light",
    "pri.trans-light.text",
    "pri.trans-light.hover",
    "pri.trans",
    "pri.trans.text",
    "pri.trans.hover",
    "pri.trans-heavy",
    "pri.trans-heavy.text",
    "pri.trans-heavy.hover",
    "c1p",
    "c1p.text",
    "c1p.hover",
    "c1p.bordered",
    "c1p.trans-light",
    "c1p.trans-light.text",
    "c1p.trans-light.hover",
    "c1p.trans",
    "c1p.trans.text",
    "c1p.trans.hover",
    "c1p.trans-heavy",
    "c1p.trans-heavy.text",
    "c1p.trans-heavy.hover",
    "c2p",
    "c2p.text",
    "c2p.hover",
    "c2p.bordered",
    "c2p.trans-light",
    "c2p.trans-light.text",
    "c2p.trans-light.hover",
    "c2p.trans",
    "c2p.trans.text",
    "c2p.trans.hover",
    "c2p.trans-heavy",
    "c2p.trans-heavy.text",
    "c2p.trans-heavy.hover",
    "c3p",
    "c3p.text",
    "c3p.hover",
    "c3p.bordered",
    "c3p.trans-light",
    "c3p.trans-light.text",
    "c3p.trans-light.hover",
    "c3p.trans",
    "c3p.trans.text",
    "c3p.trans.hover",
    "c3p.trans-heavy",
    "c3p.trans-heavy.text",
    "c3p.trans-heavy.hover",
    "sec",
    "sec.text",
    "sec.hover",
    "sec.bordered",
    "sec.trans-light",
    "sec.trans-light.text",
    "sec.trans-light.hover",
    "sec.trans",
    "sec.trans.text",
    "sec.trans.hover",
    "sec.trans-heavy",
    "sec.trans-heavy.text",
    "sec.trans-heavy.hover",
    "c1s",
    "c1s.text",
    "c1s.hover",
    "c1s.bordered",
    "c1s.trans-light",
    "c1s.trans-light.text",
    "c1s.trans-light.hover",
    "c1s.trans",
    "c1s.trans.text",
    "c1s.trans.hover",
    "c1s.trans-heavy",
    "c1s.trans-heavy.text",
    "c1s.trans-heavy.hover",
    "c2s",
    "c2s.text",
    "c2s.hover",
    "c2s.bordered",
    "c2s.trans-light",
    "c2s.trans-light.text",
    "c2s.trans-light.hover",
    "c2s.trans",
    "c2s.trans.text",
    "c2s.trans.hover",
    "c2s.trans-heavy",
    "c2s.trans-heavy.text",
    "c2s.trans-heavy.hover",
    "c3s",
    "c3s.text",
    "c3s.hover",
    "c3s.bordered",
    "c3s.trans-light",
    "c3s.trans-light.text",
    "c3s.trans-light.hover",
    "c3s.trans",
    "c3s.trans.text",
    "c3s.trans.hover",
    "c3s.trans-heavy",
    "c3s.trans-heavy.text",
    "c3s.trans-heavy.hover",
    "ter",
    "ter.text",
    "ter.hover",
    "ter.bordered",
    "ter.trans-light",
    "ter.trans-light.text",
    "ter.trans-light.hover",
    "ter.trans",
    "ter.trans.text",
    "ter.trans.hover",
    "ter.trans-heavy",
    "ter.trans-heavy.text",
    "ter.trans-heavy.hover",
    "c1t",
    "c1t.text",
    "c1t.hover",
    "c1t.bordered",
    "c1t.trans-light",
    "c1t.trans-light.text",
    "c1t.trans-light.hover",
    "c1t.trans",
    "c1t.trans.text",
    "c1t.trans.hover",
    "c1t.trans-heavy",
    "c1t.trans-heavy.text",
    "c1t.trans-heavy.hover",
    "c2t",
    "c2t.text",
    "c2t.hover",
    "c2t.bordered",
    "c2t.trans-light",
    "c2t.trans-light.text",
    "c2t.trans-light.hover",
    "c2t.trans",
    "c2t.trans.text",
    "c2t.trans.hover",
    "c2t.trans-heavy",
    "c2t.trans-heavy.text",
    "c2t.trans-heavy.hover",
    "c3t",
    "c3t.text",
    "c3t.hover",
    "c3t.bordered",
    "c3t.trans-light",
    "c3t.trans-light.text",
    "c3t.trans-light.hover",
    "c3t.trans",
    "c3t.trans.text",
    "c3t.trans.hover",
    "c3t.trans-heavy",
    "c3t.trans-heavy.text",
    "c3t.trans-heavy.hover",
    "qua",
    "qua.text",
    "qua.hover",
    "qua.bordered",
    "qua.trans-light",
    "qua.trans-light.text",
    "qua.trans-light.hover",
    "qua.trans",
    "qua.trans.text",
    "qua.trans.hover",
    "qua.trans-heavy",
    "qua.trans-heavy.text",
    "qua.trans-heavy.hover",
    "c1q",
    "c1q.text",
    "c1q.hover",
    "c1q.bordered",
    "c1q.trans-light",
    "c1q.trans-light.text",
    "c1q.trans-light.hover",
    "c1q.trans",
    "c1q.trans.text",
    "c1q.trans.hover",
    "c1q.trans-heavy",
    "c1q.trans-heavy.text",
    "c1q.trans-heavy.hover",
    "c2q",
    "c2q.text",
    "c2q.hover",
    "c2q.bordered",
    "c2q.trans-light",
    "c2q.trans-light.text",
    "c2q.trans-light.hover",
    "c2q.trans",
    "c2q.trans.text",
    "c2q.trans.hover",
    "c2q.trans-heavy",
    "c2q.trans-heavy.text",
    "c2q.trans-heavy.hover",
    "c3q",
    "c3q.text",
    "c3q.hover",
    "c3q.bordered",
    "c3q.trans-light",
    "c3q.trans-light.text",
    "c3q.trans-light.hover",
    "c3q.trans",
    "c3q.trans.text",
    "c3q.trans.hover",
    "c3q.trans-heavy",
    "c3q.trans-heavy.text",
    "c3q.trans-heavy.hover"
  ];
  widget = spray => {
    const widget = document.createElement("div");
    widget.classList.add("spray-widget");
    document.body.appendChild(widget);

    includeHTML(widget, callback);
    function callback() {
      const target = document.getElementById("spray-widget-class-target");
      const boxes = widget.getElementsByClassName("box");

      let oldContent;
      for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        const content = box.querySelector(".content");
        box.removeChild(content);
        box.addEventListener("click", () => {
          if (oldContent !== undefined) {
            target.replaceChild(content, oldContent);
          } else {
            target.appendChild(content);
          }
          oldContent = content;
        });
      }
      const settingsArea = document.getElementById(
        "spray-widget-settings-text"
      );
      boxes[0].click();
      updateUIElements(settingsArea);
      document
        .getElementById("spray-widget-theme-form")
        .addEventListener("submit", e => {
          e.preventDefault();
          let color = document.getElementById("spray-widget-choose-color")
            .value;
          let theme = document.getElementById("spray-widget-theme").value;
          less.modifyVars({
            "@var-primary-color": `${color}`,
            "@var-theme": '"' + theme + '"'
          });
          updateUIElements(settingsArea);
        });

      const addBtn = widget.querySelector("input[value='Add']");
      addBtn.addEventListener("click", () => {
        const selector = widget.querySelector(
          "input[name='spray-widget-selector']"
        ).value;
        const sprayClass = widget.querySelector(
          "select[name='spray-widget-spray-class']"
        ).value;
        spray.addToSelector(selector, sprayClass);

        updateUIElements(settingsArea);
      });
      const removeBtn = widget.querySelector("input[value='Remove']");
      removeBtn.addEventListener("click", () => {
        const selectedOption = JSON.parse(
          widget.querySelector("#spray-widget-remove-selector-list").value
        );
        const selector = selectedOption.selector;
        const sprayClass = selectedOption.class;
        spray.removeFromSelector(selector, sprayClass);

        updateUIElements(settingsArea);
      });
      const classTarget = document.getElementById("spray-widget-class-target");
      classTarget.addEventListener("click", event => {
        document.querySelector(
          "#spray-widget-spray-class"
        ).value = event.target.classList.value.trim();
      });
      fillClasses(
        document.querySelector("#spray-widget-spray-class"),
        sprayClasses
      );
      dragElement(document.querySelector(".spray-widget"));
    }
  };
  function updateUIElements(textarea) {
    textarea.value = "Less variables:\n";
    textarea.value +=
      "@var-primary-color:" +
      document.getElementById("spray-widget-choose-color").value +
      ";\n";
    textarea.value +=
      "@var-theme:'" +
      document.getElementById("spray-widget-theme").value +
      "';\n\n";
    textarea.value += "Javascript calls:\n";
    for (let i = 0; i < spray.selectors.length; i++) {
      textarea.value += `spray.addToSelector('${
        spray.selectors[i].selector
      }':'${spray.selectors[i].class}');\n`;
    }

    fillAppliedClasses(
      document.querySelector("#spray-widget-remove-selector-list"),
      spray.selectors
    );
  }
  function fillClasses(selectElem, options) {
    for (let i = 0; i < options.length; i++) {
      const option = document.createElement("option");
      option.value = options[i].split(".").join(" ");
      option.textContent = options[i];
      selectElem.appendChild(option);
    }
  }
  function fillAppliedClasses(selectElem, options) {
    for (a in selectElem.options) {
      selectElem.options.remove(0);
    }
    for (let i = 0; i < options.length; i++) {
      const option = document.createElement("option");
      option.value = JSON.stringify(options[i]);
      option.textContent = options[i].selector + " → " + options[i].class;
      selectElem.appendChild(option);
    }
  }

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (elmnt.querySelector(".header")) {
      elmnt.querySelector(".header").onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  function includeHTML(elem, callback) {
    const file = "spray-widget.html";
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          elem.innerHTML = this.responseText;
          callback();
        }
        if (this.status == 404) {
          elem.innerHTML = "Page not found.";
        }
      }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
    return;
  }

  return widget;
})();
