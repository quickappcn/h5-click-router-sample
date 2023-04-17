import React, { Component } from 'react';
import './H5ClickDemo.css';

class H5ClickDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullTitle: '',
      fullCategory: '',
      fullTextList: [],
      style: {
        cell: {
          display: 'flex',
          justifyContent: 'center'
        },
        button: {
          margin: 'auto',
          width: '55rem',
          height: '8rem',
          maxHeight: '60px',
          fontSize: 'min(4.5rem, 40px)',
          fontFamily: 'PingFangSC-Regular',
          fontWeight: 'bold',
          borderRadius: '10rem',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          outline: 'none',
          textAlign: 'center',
          verticalAlign: 'middle'
        }
      }
    };
  }

  componentDidMount() {
    this.getFullText()
  }

  getFullText() {
    this.mockFetchData().then((data) => {
      if (!data || data.code !== 200) return

      this.setState({
        fullTextList: this.splitFullText(data.fullText),
        fullTitle: data.fullTitle,
        fullCategory: data.fullCategory
      })
    })
  }

  mockFetchData() {
    return new Promise((resolve) => {
      const fullText = `林峰今日与往常一般往山间采药。
一路上，他不时抬头望向天空。
今日太阳很毒辣，照射在身上，仿佛将自己灼烧得快要化了一般。
林峰感觉到自己额头冒出了细密的汗珠。
但即便如此，他也没有半点放弃的打算，他还要继续向前走去。
"哎......"
忽然一声叹息传来，让林峰不由自主的转过头去。
只见在不远处，坐着一位白发苍苍的老者。
这位老者穿着简朴却不失华贵的衣服，虽是满头白发，可脸庞依旧俊朗。
而且从他身上散发出来的气质来看，绝对是修行之中的高手。
林峰心中微动，走上前去道："前辈，有何事吩咐？"
"小友。"这名老者微微一笑，随后从怀中掏出一块玉佩，递给了林峰。
林峰接住玉佩，神情顿时愣住了，因为玉佩上刻有两个字：天元！
他的目光瞬间凝固，眼中充斥着难以置信的神色，甚至于有些颤抖。
"怎么了，是不是发现了什么异常？"
看着林峰惊骇的模样，老者微微一笑，似乎知晓林峰的想法，缓缓说道："老夫名叫天元子，你可能不相信，但这却是真实存在的。
这玉佩乃是老夫当年离开家族前，亲自交给我父亲的东西，老夫也是在他死亡后才得知，原来他并非人类！"
说着说着，天元子的神色变得极度黯淡起来，语气里透露出悲伤之意。
他身为修仙之人，自然清楚，修真界的生活是多么艰辛。
修炼资源十分匮乏，就连凡俗之物都是十分珍贵的。
修真之人本身的天赋就比凡人更好一些，再加上修行之人又善于炼丹，炼器，制符，种植等等各种手段，使得修真界的资源极其丰富。
因此，修真界中，每隔一定的岁月，总会爆发一场血雨腥风，死伤无数。
而他那位同样为人类的父亲，则是一位炼器师，在一次偶然的机会中，被人抓去，最终惨遭折磨致死。
他本来打算带上自己唯一留下的遗产逃走的，却没想到被一群人围堵，当场斩杀。
从此以后，这个秘密就埋葬在了他的记忆中。
直到数百年前，他才得知自己的父亲是一名修真界的炼器师，而且是一位十分优秀的炼器师。
这对于普通的凡人修炼者来说，简直就是做梦也想不到的，所以他一直在寻找自己的亲生父亲。
但是几百年过去了，他还是杳无音讯，甚至连一张关于自己亲生父亲的画像都没找到。
没想到今日却意外碰到林峰，而且这块玉佩竟然跟自己的父亲有关联！
天元子内心无比震撼，甚至有些不敢相信自己的猜测。
"这位老爷爷，您的确是天元子吧？"林峰沉默许久，忽然开口问道。
闻言，天元子浑浊的双眸闪过一抹讶异之色，显然是万万没料到林峰居然认识自己。
"小兄弟，你怎么会知道？"天元子疑惑的看向林峰。
林峰苦笑一声道："前辈的大名，晚辈自然听说过。"
他的确听说过天元子的大名，甚至曾经见到过天元子。
但那都是几百年前的事了，林峰早已将这个人忘掉。`
      const fullTitle = '示例小说标题'
      const fullCategory = '修真 | 玄幻 | 逆袭'
      const code = 200
      resolve({ code, fullTitle, fullText, fullCategory })
    })
  }

  splitFullText(str) {
    let arr = [];
    let pre = 0, cur = 0;
    while (pre < str.length) {
      cur = str.indexOf('\n', pre)
      if (cur === -1) break;

      const text = str.slice(pre, cur)
      pre = cur + 1
      arr.push(text)
    }
    return arr
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="desc">
            <img className="desc-img" src={require('../assets/icon.png')} alt="" />
            <div className="desc-text">
              <div id="desc-text-title" className="desc-text-title">{this.state.fullTitle}</div>
              <div id="desc-text-category" className="desc-text-category">{this.state.fullCategory}</div>
            </div>
          </div>
          <img className="main-img" src={require('../assets/main-img.png')} alt="" />
          <div id="main-text" className="main-text">
            {this.state.fullTextList.map((txt, index) => {
              return <p key={index}>{txt}</p>
            })}
          </div>
          <div className="hint">{'>'}{'>'}{'>'} 无需下载，点击继续阅读接下来的章节</div>
          <div className="finger-con">
            <img className="finger" src={require('../assets/finger.png')} alt="" />
            <img className="finger" src={require('../assets/finger.png')} alt="" />
            <img className="finger" src={require('../assets/finger.png')} alt="" />
            <img className="finger" src={require('../assets/finger.png')} alt="" />
            <img className="finger" src={require('../assets/finger.png')} alt="" />
          </div>
          <div className="foot-holder"></div>
        </div>
        <qa-router-button
          data-package-name="com.hybrid.demo.sample"
          data-page="/"
          data-params="{}"
          data-design-params='{"fontSize": 16,"designWidth": 1080}'
          data-click-event='{"eventName": "handleClickEvent", "eventParams": "anyString"}'
          data-expose-event='{"eventName": "handleExposeEvent", "eventParams": "anyString"}'
          style={{ position: 'fixed', bottom: '1rem', margin: 'auto', width: '100%', height: '4rem' }}
        >
          <templates is="x3d">
            <div style={this.state.style.cell}>
              <button style={this.state.style.button}>点击阅读全文</button>
            </div>
          </templates>
        </qa-router-button>
      </div>
    );
  }

}

export default H5ClickDemo;
