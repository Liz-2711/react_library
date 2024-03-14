export function Avatar() {
  return (
    <img
      className="sans"
      src="https://i.redd.it/vgaciizufcd81.png"
      alt="Sans from undertale"
      width={100}
      height={100}
    />
  );
}
export default function Sans() {
  return (
    <Avatar />
  );
}
