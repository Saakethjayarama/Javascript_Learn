class CheckBoxHelper {
  constructor(value) {
    this.value = value;
  }

  isChecked = (currentValue) => {
    if (this.value.indexOf(currentValue) != -1) {
      return "checked";
    }
    return "";
  };
}

module.exports = CheckBoxHelper;
