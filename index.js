// 👾 Bugs ahead (1) 👾
// Check hint-#1 if you need help 💕
import { data } from "./data.js";

const ITEMS_PER_PAGE = 8;
let currentIndex = ITEMS_PER_PAGE;

// 👾 Bugs ahead (2) 👾
// Check hint-#2 to hint-#3 if you need help 💕
const listEl = document.querySelectorAll(".product-list");
const btnContainer = document.querySelector(".product-list-btn-container");
const showMoreItemsBtn = document.querySelector("product-list-btn");

const favorites = new Map();

// 💡 Formats a number as a Danish price string (e.g. "15,00 kr.")
const formatPrice = (price) =>
  new Intl.NumberFormat("da-DK", { minimumFractionDigits: 2 }).format(price) +
  " kr.";

// 👾 Bugs ahead (4) 👾
// Check hint-#4 to hint-#7 if you need help 💕

// 💡 Creates a piece of HTML code for a product with the help of a template literal
//  Remember to check what properties each product item contains in data.js :)
const createProductItem = (item) => {
  const isFavorited = favorites.get(item.id) ?? false;

  return `
    <li class="product-list-item">
      <a class="product-list-item-link" href="item.linkUrl" target="new_tab">
        <picture class="product-list-item-picture">
          <img src="${item.imageUrl}" class="product-list-item-img" alt="${
    item.name
  }" />
        </picture>

        <p class="product-list-item-description">
          <span class="product-list-item-name">${item.title}</span>
          <span class="product-list-item-price">${formatSum(item.price)}</span>
        </p>
      </a>

      <button class="product-list-item-favorites-btn" aria-label="Gem som favorit" data-product-id="${
        item.id
      }">
        <svg viewBox="0 0 18 18" class="svg-icon-outlined ${
          isFavorited ? "is-hidden" : "is-active"
        }" aria-hidden="true" style="width: 20px; height: 20px;"><path pid="0" d="M12.057 1.296c-.416.114-.84.285-1.205.512-.366.228-.675.541-.954.862a7.193 7.193 0 0 0-.833 1.088c-.05.079-.093.164-.136.242-.1-.135-.194-.27-.28-.405a4.946 4.946 0 0 0-.416-.541 3.416 3.416 0 0 0-.48-.484c-.517-.42-1.105-.726-1.73-.961-.286-.107-.595-.135-.896-.17a4.26 4.26 0 0 0-.797-.03c-.33.022-.667.072-.982.157-.309.079-.61.207-.883.363a3.9 3.9 0 0 0-.81.598A5.386 5.386 0 0 0 .515 3.98c-.137.27-.252.57-.331.861a7.576 7.576 0 0 0-.1.385c-.044.185-.058.377-.072.562-.029.285 0 .577.036.854.071.57.193 1.132.38 1.68.107.306.237.605.387.897.13.249.28.49.423.74.151.256.295.52.452.776.187.306.445.57.703.818.209.207.417.42.625.627.222.22.459.412.71.597.158.121.323.228.48.342.718.541 1.35 1.196 2.074 1.715.409.292.796.605 1.176.933.43.37.876.797 1.392 1.025.574.256.897-.121 1.342-.47.731-.577 1.32-1.018 2.066-1.815.653-.69 1.184-1.182 1.822-1.886.667-.74 1.442-1.46 2.037-2.264.495-.669.99-1.395 1.335-2.185.373-.86.617-1.786.53-2.733-.107-1.167-.573-2.192-1.362-3.067a3.403 3.403 0 0 0-1.02-.762 5.926 5.926 0 0 0-.853-.342 4.035 4.035 0 0 0-.925-.135c-.108 0-.215-.007-.323-.007-.48 0-.976.057-1.435.185l-.007-.014Zm2.044 1.11c.467.086.933.242 1.335.491.351.22.581.64.803.975.452.69.495 1.346.452 2.157-.021.37-.172.712-.258 1.068-.05.199-.093.398-.165.597-.079.207-.222.335-.308.527a5.032 5.032 0 0 1-.402.683c-.323.435-.653.869-1.005 1.282-.896 1.032-1.886 1.985-2.833 2.975-.488.505-1.012 1.032-1.557 1.466-.244.192-.445.37-.682.57a30.12 30.12 0 0 0-.294.241s-.473-.377-.617-.462c-.538-.335-.875-.591-1.37-.99-.897-.704-1.714-1.501-2.626-2.185-.136-.107-.28-.213-.409-.327-.157-.135-.294-.285-.444-.427-.273-.278-.567-.541-.825-.833-.23-.306-.402-.648-.596-.982-.193-.335-.394-.662-.552-1.01a7.149 7.149 0 0 1-.423-1.58 4.373 4.373 0 0 1-.03-.969 4.44 4.44 0 0 1 .238-.854c.114-.27.258-.512.423-.754.23-.292.495-.57.782-.812.186-.135.394-.249.602-.349.252-.1.51-.156.782-.206a5.437 5.437 0 0 1 1.077.007c.172.029.344.064.509.121.373.157.739.342 1.069.57.23.177.43.384.617.597.093.121.172.25.258.378.1.15.215.284.323.427.079.106.158.213.237.313.064.092.129.178.208.263.272.292.94.69 1.262.171.1-.157.165-.441.194-.62a1.75 1.75 0 0 1 .23-.597c.25-.441.66-.819 1.04-1.139.409-.342.846-.69 1.377-.797a4.603 4.603 0 0 1 1.593 0l-.014.014Z" _fill="#DCD8D2"></path></svg>  
        <svg viewBox="0 0 18 16" class="svg-icon-filled ${
          isFavorited ? "is-active" : "is-hidden"
        }" aria-hidden="true" style="width: 20px; height: 20px;"><path pid="0" d="M12.057.296c-.416.114-.84.285-1.205.512-.366.228-.675.541-.954.861a7.193 7.193 0 0 0-.833 1.09c-.05.078-.093.163-.136.241-.1-.135-.194-.27-.28-.405a4.946 4.946 0 0 0-.416-.541 3.416 3.416 0 0 0-.48-.484c-.517-.42-1.105-.726-1.73-.961-.286-.107-.595-.135-.896-.17-.266-.03-.531-.05-.797-.03-.33.022-.667.072-.982.157-.309.079-.61.207-.883.363a3.9 3.9 0 0 0-.81.598A5.386 5.386 0 0 0 .515 2.98c-.137.27-.252.57-.331.861a7.576 7.576 0 0 0-.1.385c-.044.185-.058.377-.072.562-.029.285 0 .577.036.854.071.57.193 1.132.38 1.68.107.306.237.605.387.897.13.249.28.49.423.74.151.256.295.52.452.776.187.306.445.57.703.818.209.207.417.42.625.627.222.22.459.412.71.597.158.121.323.228.48.342.718.541 1.35 1.196 2.074 1.715.409.292.796.605 1.176.933.43.37.876.797 1.392 1.025.574.256.897-.121 1.342-.47.731-.577 1.32-1.018 2.066-1.815.653-.69 1.184-1.182 1.822-1.886.667-.74 1.442-1.46 2.037-2.264.495-.669.99-1.395 1.335-2.185.373-.86.617-1.786.53-2.733-.107-1.167-.573-2.192-1.362-3.067A3.403 3.403 0 0 0 15.6.609a5.925 5.925 0 0 0-.853-.342 4.035 4.035 0 0 0-.925-.135c-.108 0-.215-.007-.323-.007-.48 0-.976.057-1.435.185l-.007-.014Z" _fill="#504139"></path></svg>
        </button>
    </li>
  `;
};

// 💡 Toggle favorite icon visibility between outlined and filled
const toggleFavoriteButton = (btn, isFavorited) => {
  const outlined = btn.querySelector(".svg-icon-outlined");
  const filled = btn.querySelector(".svg-icon-filled");

  // 👾 Bugs ahead (1) 👾
  // Check hint-#8 if you need help 💕
  if (outlined && filled) {
    outlined.classList.toggle(is - hidden, isFavorited);
    outlined.classList.toggle(is - active, !isFavorited);
    filled.classList.toggle(is - hidden, !isFavorited);
    filled.classList.toggle(is - active, isFavorited);
  }
};

// 💡 Attach favorite toggle listeners to each button
const attachFavoriteListeners = () => {
  // 👾 Bugs ahead (1) 👾
  // Check hint-#9 if you need help 💕
  listEl.querySelector(".product-list-item-favorites-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.productId;

      // Check if the product is already marked as a favorite
      const current = favorites.get(id) ?? false;

      // Toggle the favorite status (true becomes false, false becomes true)
      favorites.set(id, !current);

      // Update the button UI based on the new favorite status
      toggleFavoriteButton(btn, !current);
    });
  });
};

// 💡 Handles rendering the product items on the page
const renderItems = () => {
  // 👾 Bugs ahead (2) 👾
  // Check hint-#10 to hint-#11 if you need help 💕
  if (listEl || btnContainer) return;

  // 💡 Get and render all visible items
  const visibleItems = data.slice(0, currentIndex - 1);
  listEl.innerHTML = visibleItems
    .map((item) => createProductItem(item))
    .join("");

  // 💡 Hide the button if we've shown everything
  const hasMore = currentIndex < data.length;
  btnContainer.classList.toggle("is-active", hasMore);

  attachFavoriteListeners();
};

// 💡 Load more items in chunks
// 👾 Bugs ahead (1) 👾
// Check hint-#12 if you need help 💕
const showMoreItems = () => {
  currentIndex -= ITEMS_PER_PAGE;
  renderItems();
};

// 💡 Runs the code after the page content has loaded
document.addEventListener("DOMContentLoaded", () => {
  renderItems();

  if (showMoreItemsBtn) {
    showMoreItemsBtn.addEventListener("click", showMoreItems);
  }
});
