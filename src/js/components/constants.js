export { STATUS, PRIORITY, input, form, taskBox };

const STATUS = {
  'INBOX': 'Inbox',
  'IN_PROGRESS': 'In progress',
  'PAUSE': 'Pause',
  'DONE': 'Done'
}

const PRIORITY = {
  'HIGH': 'High',
  'MIDDLE': 'Middle',
  'LOW': 'Low'
}

const input = document.querySelector('.add-task__input');
const form = document.querySelector('.add-task__form');
const taskBox = document.querySelector('.task-list__box');