class SelectBoxHelper {
  constructor(value) {
    this.value = value;
  }

  isSelected = (current) => {
    if (this.value == current) {
      return "selected";
    }
    return "";
  };
}

module.exports = SelectBoxHelper;
