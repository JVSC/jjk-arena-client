export function mobileOrDesktop(): string {
  if (screen.width <= 760) return "mobile";
  return "desktop";
}

export function isMobile(): boolean {
  if (screen.width <= 760) return true;
  return false;
}
