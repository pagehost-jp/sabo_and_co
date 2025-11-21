/**
 * ホームページ制作ヒアリングフォーム 自動作成スクリプト
 *
 * 【使い方】
 * 1. https://script.google.com にアクセス
 * 2. 「新しいプロジェクト」をクリック
 * 3. このコードを全部コピーして貼り付け
 * 4. 上の「▶ 実行」ボタンをクリック
 * 5. 初回は権限の許可を求められるので「許可」
 * 6. 完成！ログにフォームのURLが表示されます
 */

function createHiringForm() {
  // フォームを作成
  var form = FormApp.create('ホームページ制作ヒアリングフォーム');

  // フォームの説明
  form.setDescription(
    'ホームページ制作のご依頼ありがとうございます！\n' +
    'あなたに合ったサイトを作るために、いくつか質問させてください。\n\n' +
    '「うまく言葉にできない」「わからない」も全然OK！\n' +
    '空欄のまま送っていただいても大丈夫です。\n' +
    'あとから一緒に考えていきましょう。\n\n' +
    '所要時間：5〜15分くらい'
  );

  // =====================================
  // セクション1：基本情報
  // =====================================
  form.addSectionHeaderItem()
    .setTitle('基本情報')
    .setHelpText('まずはあなたのことを教えてください。');

  form.addTextItem()
    .setTitle('お名前')
    .setRequired(true);

  form.addTextItem()
    .setTitle('会社名 / 屋号（任意・個人の方は空欄でOK）')
    .setRequired(false);

  form.addTextItem()
    .setTitle('どんなお仕事をされていますか？')
    .setHelpText('（例：コーチング、デザイナー、飲食店、サロン経営など）')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('SNSや既存サイトがあれば教えてください（任意）')
    .setHelpText('Instagram、X（Twitter）、既存のホームページなど、URLを貼ってください。なければ空欄でOKです。')
    .setRequired(false);

  // =====================================
  // セクション2：サイトを作る目的
  // =====================================
  form.addPageBreakItem()
    .setTitle('サイトを作る目的')
    .setHelpText('「なんのためにサイトを作りたいか」を教えてください。\n複数あっても大丈夫です！');

  form.addCheckboxItem()
    .setTitle('ホームページを作る目的は何ですか？（複数選択OK）')
    .setChoiceValues([
      '自分やサービスの世界観を伝えたい',
      'サービス・商品の紹介をしたい',
      'お問い合わせや申し込みを増やしたい',
      '「ちゃんとしてる感」を出して信頼につなげたい',
      '検索から見つけてもらいたい（Google検索など）',
      '採用・求人に使いたい',
      '1ページ完結のLP（ランディングページ）を作りたい'
    ])
    .showOtherOption(true)
    .setRequired(true);

  form.addTextItem()
    .setTitle('サイトを見た人に、最終的にどうしてほしいですか？')
    .setHelpText('（例：「お問い合わせしてほしい」「LINEに登録してほしい」「予約してほしい」など）')
    .setRequired(true);

  // =====================================
  // セクション3：デザインの好み
  // =====================================
  form.addPageBreakItem()
    .setTitle('デザインの好み')
    .setHelpText('「なんとなくこんな感じがいい」で大丈夫です！\n言葉にできなくても、参考サイトやスクショがあれば十分伝わります。');

  form.addCheckboxItem()
    .setTitle('どんな雰囲気のサイトがいいですか？（複数選択OK）')
    .setChoiceValues([
      'シンプル・すっきり',
      'やわらかい・ナチュラル',
      'あたたかみのある・親しみやすい',
      'スタイリッシュ・かっこいい',
      'ポップ・明るい',
      '高級感・洗練された',
      '世界観が強め・個性的',
      'よくわからない / 相談して決めたい'
    ])
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('「こんなサイトがいいな」という参考はありますか？（任意）')
    .setHelpText('参考サイトのURL、Pinterestの画像、スクショなど、なんでもOKです。あとで共有でも大丈夫！')
    .setRequired(false);

  form.addTextItem()
    .setTitle('使いたい色があれば教えてください（任意）')
    .setHelpText('（例：「青系」「やさしいピンク」「ブランドカラーは#5FAD7A」など。なければ空欄で）')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('苦手なデザイン・避けたい雰囲気はありますか？（任意）')
    .setHelpText('（例：「ギラギラした感じは苦手」「暗すぎるのはイヤ」など）')
    .setRequired(false);

  // =====================================
  // セクション4：サイトに載せたい内容
  // =====================================
  form.addPageBreakItem()
    .setTitle('サイトに載せたい内容')
    .setHelpText('すでにある情報を教えてください。\n「まだ決まってない」「一緒に考えたい」も歓迎です！');

  form.addParagraphTextItem()
    .setTitle('サイトのキャッチコピーや伝えたいメッセージ（任意）')
    .setHelpText('パッと思いつくものがあれば。なければ一緒に考えましょう！')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('自己紹介・会社紹介の文章（任意）')
    .setHelpText('プロフィールや会社概要に使う文章があれば。箇条書きでもOKです。')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('サービス・商品の内容（任意）')
    .setHelpText('提供しているサービスや商品を教えてください。箇条書きで大丈夫です。')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('大切にしている想い・理念・ストーリー（任意）')
    .setHelpText('「なぜこの仕事をしているか」「どんな想いがあるか」など。')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('実績・経歴（任意）')
    .setHelpText('載せたい実績や経歴があれば。')
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('使いたい写真はありますか？')
    .setChoiceValues([
      'はい（あとで共有します）',
      'いいえ（フリー素材などで対応してほしい）',
      '相談したい'
    ])
    .setRequired(true);

  // =====================================
  // セクション5：必要なページ
  // =====================================
  form.addPageBreakItem()
    .setTitle('必要なページ')
    .setHelpText('どんなページが必要そうか、今の時点でわかる範囲で選んでください。');

  form.addCheckboxItem()
    .setTitle('必要なページを選んでください（複数選択OK）')
    .setChoiceValues([
      'トップページ',
      'サービス紹介ページ',
      'プロフィール / 会社概要',
      'お客様の声・実績',
      'ブログ / お知らせ',
      'お問い合わせフォーム',
      '1ページ完結のLP（縦長ページ）',
      'わからない / 相談して決めたい'
    ])
    .showOtherOption(true)
    .setRequired(true);

  // =====================================
  // セクション6：文章について
  // =====================================
  form.addPageBreakItem()
    .setTitle('文章について')
    .setHelpText('サイトに載せる文章をどうするか教えてください。');

  form.addListItem()
    .setTitle('文章の作成はどうしますか？')
    .setChoiceValues([
      '全部おまかせしたい',
      'たたき台を作ってほしい（自分で修正する）',
      '自分で用意する',
      '一部だけサポートしてほしい',
      '相談して決めたい'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('大事にしたい言葉・キーワードがあれば（任意）')
    .setHelpText('（例：「軽やかに」「本音で」「一緒に」など、よく使う言葉やキーワード）')
    .setRequired(false);

  // =====================================
  // セクション7：技術的なこと
  // =====================================
  form.addPageBreakItem()
    .setTitle('技術的なこと')
    .setHelpText('わからない項目は「相談して決めたい」でOKです！\n一緒に最適な方法を考えましょう。');

  form.addCheckboxItem()
    .setTitle('サイトの作り方の希望はありますか？')
    .setChoiceValues([
      'シンプルなサイト（HTML/CSS）← 軽くて速い',
      'WordPress（更新しやすい、ブログ向き）',
      'Wix（一緒に画面共有しながら作る）',
      'Notionでサイトを作りたい',
      '相談して決めたい ← おすすめ！'
    ])
    .setRequired(true);

  form.addListItem()
    .setTitle('サーバー・ドメイン（URLのこと）の状況は？')
    .setChoiceValues([
      'すでに持っている',
      'これから取得したい（やり方を教えてほしい）',
      '全部おまかせしたい',
      'よくわからない / 相談したい'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('WordPressやサーバーのログイン情報は共有できますか？')
    .setHelpText('既存サイトの編集やサーバー設定が必要な場合にお聞きします。')
    .setChoiceValues([
      'はい、共有できます',
      'いいえ、できません',
      '該当しない / わからない'
    ])
    .setRequired(true);

  // =====================================
  // セクション8：公開後について
  // =====================================
  form.addPageBreakItem()
    .setTitle('公開後について')
    .setHelpText('サイト完成後のことを教えてください。');

  form.addListItem()
    .setTitle('公開後の更新はどうしたいですか？')
    .setChoiceValues([
      '自分で更新できるようにしたい',
      '更新も含めて継続サポートを頼みたい',
      '必要なときだけスポットで依頼したい',
      'まだ決めていない'
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('納品方法の希望はありますか？（任意）')
    .setChoiceValues([
      'ZIPファイルで納品',
      'サーバーにアップして納品',
      'GitHubで管理',
      'よくわからない / おまかせ'
    ])
    .setRequired(false);

  // =====================================
  // セクション9：最後に
  // =====================================
  form.addPageBreakItem()
    .setTitle('最後に')
    .setHelpText('あなたのことをもう少し教えてください。\n何を書いても大丈夫です！');

  form.addParagraphTextItem()
    .setTitle('このサイトを見てほしい人は誰ですか？（ターゲット）')
    .setHelpText('（例：「30代の働くママ」「起業したばかりの人」「地元の人」など）')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('使ってほしくない言葉・避けたい表現はありますか？（任意）')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('今、不安に思っていることはありますか？（任意）')
    .setHelpText('「ちゃんと伝わるかな」「予算が心配」など、なんでも書いてください。')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('その他、伝えておきたいことがあれば！（任意）')
    .setHelpText('質問、要望、メッセージ、なんでもどうぞ！')
    .setRequired(false);

  // =====================================
  // 完了設定
  // =====================================
  form.setConfirmationMessage(
    'ご回答ありがとうございます！\n' +
    '内容を確認して、2〜3営業日以内にご連絡いたします。\n\n' +
    'お話できることを楽しみにしています！'
  );

  // フォームのURLをログに出力
  Logger.log('フォームが作成されました！');
  Logger.log('編集用URL: ' + form.getEditUrl());
  Logger.log('回答用URL: ' + form.getPublishedUrl());

  // URLをポップアップでも表示
  var ui = SpreadsheetApp.getUi ? SpreadsheetApp.getUi() : null;
  if (ui) {
    ui.alert('フォーム作成完了！', '回答用URL:\n' + form.getPublishedUrl(), ui.ButtonSet.OK);
  }

  return form.getPublishedUrl();
}
