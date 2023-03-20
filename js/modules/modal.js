export function showModal() {
    let modal = document.querySelector('.details')
    modal.classList.remove('hidden')
  }

export function hideModal() {
    let modal = document.querySelector('.details')
    modal.classList.add('hidden')
}