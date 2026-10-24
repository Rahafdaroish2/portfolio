const paths = {
  sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></>,
  moon: <path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z"/>,
  arrow: <path d="M7 17 17 7M7 7h10v10"/>,
  up: <path d="m6 12 6-6 6 6M12 6v14"/>,
  close: <path d="m6 6 12 12M6 18 18 6"/>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></>,
  monitor: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></>,
  layers: <><path d="m12 3 10 5-10 5L2 8 12 3ZM2 12l10 5 10-5M2 16l10 5 10-5"/></>,
  code: <><path d="m7 7-5 5 5 5m10-10 5 5-5 5M14 4l-4 16"/></>,
  graduation: <><path d="m2 8 10-5 10 5-10 5L2 8Zm4 2v7c4 3 8 3 12 0v-7m4-2v9"/></>,
}
export default function Icon({name,...props}) { return <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg> }
