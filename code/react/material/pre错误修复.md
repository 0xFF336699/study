material里如果p标签套了pre会导致报错

<pre> cannot appear as a descendant of <p>

安装模块

> yarn add typeface-roboto

把p标签替换Typography才行

```

import Typography from '@material-ui/core/Typography'
import {Checkbox} from "@material-ui/core";
// import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
// 如果没用到them就注释掉，用window那行就行。
// const theme = createMuiTheme({
//     typography: {
//         useNextVariants: true,
//     },
// });
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

<Typography component={'span'} variant={'body2'}>
                                还有一个是可以打开的，但是网页版商城在拼多多拉起的时候会抛错，报告scheme错误。可以提供给他们那边商务看看能否让技术查一下拼多多的scheme是什么来解决一下。

                                <pre>
                            网页无法打开

位于pinduoduo://com.xunmeng.pinduoduo/duo_coupon_landing.html?goods_id=209337167966&pid=50003_18675372&goods_sign=c9L2ktc5TspHgFvRwfPY9CTKMUro_JQcKjPNZzi&customParameters=%7B%22uid%22%3A%2218061435_1%22%2C%22chn%22%3A1%7D&cpsSign=CC_201223_50003_18675372_c2827a7f12c63ef0f7adf7f2e6d4a90d&duoduo_type=3 的网页无法加载，因为：

net::ERR_UNKNOWN_URL_SCHEME
                        </pre>
                            </Typography>
```