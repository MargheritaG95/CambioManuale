// Utilità condivise
export function openModal(overlay, modal){
  overlay.style.display = 'block';
  modal.style.display = 'grid';
  overlay.setAttribute('aria-hidden','false');
  modal.setAttribute('aria-hidden','false');
}
export function closeModal(overlay, modal){
  overlay.style.display = 'none';
  modal.style.display = 'none';
  overlay.setAttribute('aria-hidden','true');
  modal.setAttribute('aria-hidden','true');
  const url = new URL(location.href);
  url.searchParams.delete('qr');
  history.replaceState({}, '', url);
}
export function autoOpenIfQR(overlay, modal){
  const params = new URLSearchParams(location.search);
  if (params.get('qr') === '1') openModal(overlay, modal);
}
