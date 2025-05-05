import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-gray-100">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-serif font-medium tracking-tight">
              Knowaly
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              機能
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              使い方
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              料金プラン
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden md:inline-flex text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              ログイン
            </Link>
            <Button className="bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800">
              始める
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-medium tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                ノイズのない知識の収集を
              </h1>
              <p className="mt-6 text-lg text-gray-500 md:text-xl">
                思考、研究、アイデアを集め整理するための、静かで集中できる空間。
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                  大切なことを記録する
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  使い方を見る
                </Button>
              </div>
            </div>
            <div className="mt-16 flex justify-center">
              <div className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  width={1200}
                  height={600}
                  alt="Knowalyインターフェースプレビュー"
                  className="w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="border-t border-gray-100 bg-gray-50 py-20"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-gray-900 md:text-4xl">
                使い方
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                シンプル、集中的、そして気が散らない知識管理
              </p>
            </div>
            <div className="mt-16 grid gap-12 md:grid-cols-2">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M21 8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
                    <path d="M21 12H3" />
                    <path d="M8 20V12" />
                  </svg>
                </div>
                <h3 className="mt-6 font-serif text-xl font-medium text-gray-900">
                  ボックスを作成
                </h3>
                <p className="mt-2 text-gray-500">
                  知識をプロジェクトベースのボックスに整理します。複雑な階層やネストされたページはありません。
                </p>
                <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    width={500}
                    height={300}
                    alt="ボックス作成インターフェース"
                    className="w-full rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M14 4h6v6" />
                    <path d="M20 4 9 15" />
                    <path d="M4 4h6v6" />
                    <path d="M4 20h6v-6" />
                    <path d="M14 20h6v-6" />
                  </svg>
                </div>
                <h3 className="mt-6 font-serif text-xl font-medium text-gray-900">
                  知識を記録
                </h3>
                <p className="mt-2 text-gray-500">
                  クリーンで気が散らないエディターで思考、メモ、アイデアを追加します。フォーマットではなく、コンテンツに集中します。
                </p>
                <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    width={500}
                    height={300}
                    alt="知識記録インターフェース"
                    className="w-full rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-gray-900 md:text-4xl">
                重要な機能
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                必要なものだけを、余計なものは一切なし
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
                    <path d="M9 17h6" />
                    <path d="M9 13h6" />
                  </svg>
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-gray-900">
                  Markdownサポート
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  プレーンテキストで書くか、必要に応じて簡単なMarkdownを使用して軽いフォーマットを行えます。
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Search className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-gray-900">
                  高速検索
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  すべての知識ボックスにわたる強力な全文検索で、瞬時に必要な情報を見つけられます。
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-gray-900">
                  デフォルトでプライバシー
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  あなたのデータはプライベートに保たれます。私たちはあなたの情報を追跡、分析、販売しません。
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                    <path d="M10 2c1 .5 2 2 2 5" />
                  </svg>
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-gray-900">
                  気が散らない環境
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  ブロックもページも気が散るものもありません。大切なことを記録するための静かな空間だけです。
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M17 6.1H3" />
                    <path d="M21 12.1H3" />
                    <path d="M15.1 18H3" />
                  </svg>
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-gray-900">
                  シンプルな整理
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  タグとボックスで整理します。複雑な階層やネストされた構造はありません。
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-gray-900">
                  集中体験
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  知識の収集と整理に集中できるクリーンでミニマルなインターフェース。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-gray-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600"
                    >
                      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                      <line x1="6" x2="6" y1="2" y2="4" />
                      <line x1="10" x2="10" y1="2" y2="4" />
                      <line x1="14" x2="14" y1="2" y2="4" />
                    </svg>
                  </div>
                  <blockquote className="mt-4">
                    <p className="font-serif text-lg text-gray-700">
                      「AIについて学んだことをすべてKnowalyに集めています。シンプルなボックス構造のおかげで、情報を際限なく整理するのではなく、知識の収集に集中できます。」
                    </p>
                  </blockquote>
                  <div className="mt-6">
                    <p className="font-medium text-gray-900">佐藤 美咲</p>
                    <p className="text-sm text-gray-500">AIリサーチャー</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-gray-900 md:text-4xl">
                大切なことを記録する準備はできましたか？
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Knowalyを使って知識を整理する何千もの個人やチームに加わりましょう。
              </p>
              <div className="mt-10">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                  大切なことを記録する
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                クレジットカード不要。無料プランあり。
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-100 bg-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-lg font-serif font-medium tracking-tight">
                Knowaly
              </span>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                機能
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                料金プラン
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                ブログ
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                プライバシー
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                利用規約
              </Link>
            </nav>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Knowaly. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
