// 次の講義でfrancというパッケージを使用します。このパッケージのバージョンは6.0.0以降でrequireでは読み込めなくなったため、コースと同様のコードで進めるためには、以下のコマンド

// npm i franc langs

// を、下のようにfrancのバージョンを5.0.0に指定するようにしてください。

// npm i franc@5.0.0 langs

// これで、講義と同じコードで進めることができます。



// CommonJSやESMを聞いたことがある人は、francの6.0.0以上を使う場合、CommonJSの以下の記法を

var franc = require('franc')
franc('')
// ESMの以下の記法に変えることで、francを使うこともできます。

import {franc} from 'franc'
franc('')