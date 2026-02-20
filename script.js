// Use shared posts array from posts-data.js (window.POSTS)
const posts = window.POSTS || [];

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return new Intl.DateTimeFormat(undefined, { month: 'short', day: '2-digit', year: 'numeric' }).format(d);
  } catch (e) { return iso; }
}

function renderPosts() {
  const container = document.getElementById('posts');
  if (!container) return;
  if (!posts || posts.length === 0) {
    container.innerHTML = '<div class="card"><p>No posts yet.</p></div>';
    return;
  }

  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA;
  });

  container.innerHTML = sortedPosts.map(post => {
    const url = `post.html?id=${encodeURIComponent(post.id)}`;
    return `
      <a class="card-link" href="${url}" aria-label="Open post ${escapeHtml(post.title)}">
        <article class="card" data-id="${post.id}">
          <div class="meta">
            <span>${formatDate(post.createdAt)}</span>
            <span>•</span>
            <span>${post.author}</span>
          </div>
          <h2 class="card-title">${escapeHtml(post.title)}</h2>
          <div class="card-body"><p class="post-excerpt">${escapeHtml(post.content)}</p></div>
          <div class="card-footer">View Report →</div>
        </article>
      </a>
    `;
  }).join('\n');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

document.addEventListener('DOMContentLoaded', () => {
  renderPosts();
});
