# インストール

![MM_ImageToMesh Icon](./images/ImageToMesh.png)

## 動作環境
- **OS**: Windows
- **Maya**: Python 3 が動作するバージョン (Maya 2022以降推奨)

## ダウンロード

最新版は以下からダウンロードしてください。

[MM_ImageToMesh をダウンロード (zip)](/MM_ImageToMesh.zip)

## 手順

   - 推奨: `C:\Users\<ユーザー名>\Documents\maya\scripts\00_MM\MM_ImageToMesh`

2. Mayaを起動します。

3. スクリプトエディタ (Pythonタブ) に以下のコードを入力し、実行します。
   ※ パスは保存した場所に合わせて変更してください。

```python
import sys
import os

# ツールフォルダへのパス
tool_path = r"C:\Users\<ユーザー名>\Documents\maya\scripts\00_MM\MM_ImageToMesh（上記ツールを保存した場所）"

if tool_path not in sys.path:
    sys.path.append(tool_path)

import MM_ImageToMesh
import importlib
importlib.reload(MM_ImageToMesh)
MM_ImageToMesh.main()
```

4. 頻繁に使用する場合は、上記のコードをシェルフに登録しておくと便利です。
