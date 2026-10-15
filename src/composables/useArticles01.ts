import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { Article } from '../types/article'
import avatarTom00 from '../assets/avatar-tom00.png'
import avatarTom01 from '../assets/avatar-tom01.png'
import avatarTom02 from '../assets/avatar-tom02.png'
import avatarTom03 from '../assets/avatar-tom03.png'

const titles = [
  'Online Meeting Connects Students and Corporate Leaders for Growth Dialogue',
  'Building Supportive Spaces: Wenzhou University Enhances Mental Wellness for International Students',
  '2026 International New Year Gala and Chinese Competition Awards',
  'Campus Safety in Focus: International Students Complete Mandatory Safety Training',
  'CIE Hosts First Silk Road Student Talent Show',
]
const avatars = [avatarTom00, avatarTom01, avatarTom02, avatarTom03]

export function useArticles01() {
  const data = ref<Article[]>([])
  const searchRef = ref('')
  const filterItems = ref<Article[]>([])
  const info = ref('')
  let infoTimer: ReturnType<typeof setTimeout> | undefined

  // 输入变化和刷新数据均触发筛选；直接匹配文本，特殊字符也不会抛出异常。
  watch([searchRef, data], ([keyword, articles]) => {
    const query = keyword.trim().toLocaleLowerCase()
    filterItems.value = articles.filter((item) =>
      item.title.toLocaleLowerCase().includes(query)
      || item.owner.name.toLocaleLowerCase().includes(query),
    )
  }, { immediate: true })

  function clearInfo() {
    clearTimeout(infoTimer)
    info.value = ''
  }

  function refreshData() {
    clearInfo()
    const now = new Date()
    data.value = Array.from({ length: 10 }, (_, index) => ({
      id: index,
      title: titles[index % titles.length]!,
      star: index,
      modify_time: new Date(now),
      owner: { name: `Tom${index}`, avatar: avatars[index % avatars.length]! },
    }))
  }

  function onClickFn(item: Article) {
    clearInfo()
    info.value = `Item for id=${item.id} is clicked（作者：${item.owner.name}）`
    infoTimer = setTimeout(() => { info.value = '' }, 2000)
  }

  function onAddStarFn(item: Article) {
    // 子组件只发送事件，由拥有数据的父级逻辑修改点赞数。
    const article = data.value.find((entry) => entry.id === item.id)
    if (article) article.star += 1
  }

  function onSearch(value: string) {
    searchRef.value = value
  }

  onMounted(refreshData)
  onBeforeUnmount(clearInfo)

  return { data, searchRef, filterItems, info, refreshData, onClickFn, onAddStarFn, onSearch }
}
