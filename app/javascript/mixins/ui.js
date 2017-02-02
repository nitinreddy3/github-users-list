import CONSTANTS from '../constants/app-constant';

var UI = {
  notify: (type, message, customTime) => {
    var alertBox = $('.customAlertMsg');
    var alert = CONSTANTS.ALERT;
    var className = alert.typeClass[type] || alert.typeClass.info;
    alertBox.find('.message').prop('textContent', message);
    alertBox.addClass(className);
    alertBox.css('display', 'block');
    setTimeout(() => {
      alertBox.css('display', 'none');
      alertBox.removeClass(className);
    }, customTime || alert.displayTime);
  }
};

export default UI;
