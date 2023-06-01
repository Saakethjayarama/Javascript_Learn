class RadioButtonHelper {
  constructor(value) {
    this.value = value;
  }

  isChecked = (current) => {
    if (this.value == current) {
      return "checked";
    }
    return "";
  };
}

module.exports = RadioButtonHelper;
