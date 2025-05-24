# 退職代行 Yamet AI（やめたい）のLP開発用リポジトリ

このリポジトリは、**自社内・自分用**の「Yamet AI」ランディングページ（LP）開発資産です。  
プロダクトのプロモーションや仕様検証、UI/UXの設計・改良を目的として自前で管理しています。  
外部公開・OSS化・外部コントリビュート等は一切想定していません。

---

## プロジェクト概要

- **サービス名:** Yamet AI
- **用途:** 退職代行AIサービスの紹介LP
- **構成:** Next.js + TypeScript  
- **対象:** 自分（社内）専用、検証・アイデア整理・LP迅速作成用

---

## 開発メモ

- **自分用メモ**
  - アイコンや色、テキストなどは随時仮置き・差し替えOK
  - 仕様・設計・構成は流動的（思いついたらどんどん直す）
  - LP構成部品は`src/components/sections/`や`src/components/ui/`で用途ごとに分割
  - スタイル指針や要件メモは`docs/blueprint.md`に記載

- **未対応・今後要検討**
  - バックエンドAPI（/api/subscribe など）の本実装
  - テスト/CI/CDや本番デプロイ周りは未整備
  - TallyフォームIDや外部連携は直書き（要整理）

---

## セットアップ

```bash
git clone https://github.com/shute2004/Yamet-AI_lp.git
cd Yamet-AI_lp
npm install
npm run dev
# http://localhost:3000 で確認
```

- Node.js 18以上推奨

---

## ディレクトリ構成（抜粋）

```
src/
  app/             # Next.jsエントリ
  components/
    sections/      # LPセクション部品
    ui/            # 汎用UI部品
docs/
  blueprint.md     # デザイン・機能要件メモ
public/            # 画像等
```

---

## 注意

- **社外非公開・自己責任運用**
- 説明・コメントも自分用なので、第三者向け表現や詳細化は不要
- 外部公開・共有時はこのREADMEを必ず書き換えること

---

## ライセンス

**非公開・自社専用**。  
外部配布・転載・公開等は一切禁止。