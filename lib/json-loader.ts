async function loadJSON(filename: string) {
  try {
    const module = await import(`@/data/${filename}`)
    return module.default || module
  } catch (error) {
    console.error(`Error loading ${filename}:`, error)
    return null
  }
}

export async function getPanelMembers() {
  const data = await import("@/data/panel-members.json")
  return data.members || []
}

export async function getAchievements() {
  const data = await import("@/data/achievements.json")
  return data.achievements || []
}

export async function getNotices() {
  const data = await import("@/data/notices.json")
  return data.notices || []
}

export async function getGalleryAlbums() {
  const data = await import("@/data/gallery.json")
  return data.albums || []
}

export async function getMemberBySlug(slug: string) {
  const members = await getPanelMembers()
  return members.find((m) => m.slug === slug)
}

export async function getNoticeBySlug(slug: string) {
  const notices = await getNotices()
  return notices.find((n) => n.slug === slug)
}
