    area.hidden = true;

    document.onkeydown = function (a) {
      if (a.ctrlKey && a.keyCode == '69') {
        view.hidden = true;
        area.hidden = false;
        area.focus()
        area.innerHTML = view.innerHTML;
        return false;
      }

      if (a.ctrlKey && a.keyCode == '83') {
        view.hidden = false;
        area.hidden = true;
        view.innerHTML = area.value;
        return false;
      } else if (a.keyCode == '27') {
        view.hidden = false;
        area.hidden = true;
      }
    };
