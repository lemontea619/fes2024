import Link from "next/link";

export function HeaderMenu() {
  return (
    <nav>
      <ul className="flex space-x-9 text-xl relative">
        <li>
          <Link href="/aaa">企画情報</Link>
        </li>
        <li>露店</li>
        <li>アクセス</li>
        <li>協賛企業</li>
        <li>お問い合わせ</li>
      </ul>
    </nav>
  );
}
