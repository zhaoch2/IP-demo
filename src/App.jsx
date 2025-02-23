import { useState } from 'react'
import './App.css'

function App() {
  const modules = [
    {
      title: '1、AI账号规划专家',
      items: [
        '账号规划专家'
      ]
    },
    {
      title: '2、AI选题专家',
      items: [
        '基于用户需求的选题',
        '基于热点的选题',
        '公众号30人选题',
        '小红书30人选题',
        '抖音30人选题',
        '视频号30人选题'
      ]
    },
    {
      title: '3、AI短视频口播文案专家',
      items: [
        '描述+权威性+情感共鸣+行动号召',
        '性能效果+权威性+真实方法+引导互动',
        '积极情绪+成功案例+真实方法+互动引导',
        '事实+个人态度+互动引导+总结互动',
        '程序性提升+塑造明星+输出方案',
        '行业地位+塑造明星+输出方案'
      ]
    },
    {
      title: '4、公众号文案专家',
      items: [
        '公众号爆文文案团队'
      ]
    },
    {
      title: '5、自媒体标题大师',
      items: [
        '自媒体文章标题大师'
      ]
    },
    {
      title: '6、小红书图文文案大师',
      items: [
        '小红书图文文案大师 - DeepSeek V3 Coze版',
        '小红书图文文案大师 - GPT-4'
      ]
    },
    {
      title: '7、AI朋友圈专家',
      items: [
        '干货分享 认知觉醒',
        '干货分享 默念前置',
        '干货分享 故事引人',
        '干货分享 晨读上瘾',
        '生活感悟 权威认证',
        '生活感悟 故事引人',
        '编辑制作',
        '点赞广',
        '用户成交',
        '学员辅导',
        '学员案例'
      ]
    },
    {
      title: '8、AI课程专家',
      items: [
        '正式开课',
        '正式授课'
      ]
    },
    {
      title: '9、AI销售专家',
      items: [
        '高客单销售专家'
      ]
    }
  ]

  return (
    <div className="app">
      <header className="header">
        <h1>DeepSeek 个人IP全场景 AI智能体</h1>
      </header>
      <main className="main">
        <div className="modules-grid">
          {modules.map((module, index) => (
            <div key={index} className="module">
              <h2>{module.title}</h2>
              <ul>
                {module.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
