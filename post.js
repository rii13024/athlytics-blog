function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return new Intl.DateTimeFormat(undefined, { month: 'long', day: '2-digit', year: 'numeric' }).format(d);
  } catch (e) { return iso; }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderPost() {
  const id = getQueryParam('id');
  const posts = window.POSTS || [];
  const post = posts.find(p => String(p.id) === String(id));
  const root = document.getElementById('post-root');
  if (!root) return;

  if (!post) {
    root.innerHTML = '<div class="card"><h2>Post not found</h2><p>The post you requested does not exist.</p><p><a href="index.html">Back to feed</a></p></div>';
    return;
  }

  root.innerHTML = `
    <article class="card">
      <div class="meta">
        <span>${formatDate(post.createdAt)}</span>
        <span>•</span>
        <span>${escapeHtml(post.author)}</span>
      </div>
      <h2 class="card-title">${escapeHtml(post.title)}</h2>
      <div class="card-body"><p class="post-content">${escapeHtml(post.content)}</p></div>
      <div class="card-footer"><a href="index.html">Back to feed</a></div>
    </article>
  `;
}

document.addEventListener('DOMContentLoaded', renderPost);
