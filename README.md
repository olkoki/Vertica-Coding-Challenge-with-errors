# **💡Vertica Coding Challenge: Hints & Solutions**
<p>Hi and welcome! This small project is designed as a fun <strong>"find and fix the bugs"</strong> challenge in HTML and JavaScript. Throughout the code and markup, you will find several bugs marked with comments that will help you spot where they appear. The comments include the bug count and hint names relevant for that code block. The actual solutions and hints are included here to guide you along the way. Happy hunting 👾💕</p>

> ❗ Please note that this project prioritizes simplicity and clarity over best practices. 
>For ease of understanding, all logic is consolidated into a single file. 
>In real-world applications, it's recommended to separate concerns, modularize your code, and follow established design patterns to ensure maintainability and scalability.
>Perhaps also use TypeScript for the type safety.

</br>

### **🌸 Hints & Solutions for <ins>index.html</ins> 🌸**

<details>
    <summary><strong>💡 hint-#1 </strong></summary>
    <p><small>There is something wrong with the section attribute (check the CSS file 👀).</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>The id should be a class. </br>
    <code>&lt;section class="product-list-container"&gt;</code></small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#2 </strong></summary>
    <p><small>There is something wrong with the <code>src</code> attribute.</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>We are missing the = sign in the the <code>src</code> attribute.</br> <code>src="path"</code></small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#3 </strong></summary>
    <p><small>There is an attribute missing from the img tag.</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>The image tag should always contain an <code>alt</code> attribute for accessibility, regardless if it is empty or not.</small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#4 </strong></summary>
    <p><small>The h1 tag looks a bit suspicious.</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>The closing tag for the <code>h1</code> is wrong.</br>
    <code>&lt;h1&gt;Sommerlig gaveindpakning&lt;/h1&gt</code></small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#5 </strong></summary>
    <p><small>There is something wrong with the attribute on the ul (check the JS or CSS file 👀). </small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>There is a spelling mistake in the class name. </br>
    <code>&lt;ul class="product-list"&gt;&lt;/ul&gt;
</code></small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#6 </strong></summary>
    <p><small>There is a div tag with a type="button" attribute. Is that correct? </small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>The div tag should be changed to a button tag. We always want to use the correct semantic elements when possible, because they come with a lot of meaning and built-in functionality (like the button tag which allows you to focus it with the keyboard by default and trigger the on click by pressing ENTER.)</br></br>
    <code>&lt;button type="button" class="product-list-btn"&gt;Se mere&lt;/button&gt;</code></small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#7 </strong></summary>
    <p><small>There is a tag that isn't correctly closed.</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>The div tag with the <code>product-list-btn-container</code> isn't correctly closed.</br>
<code>
&lt;div class="product-list-btn-container"&gt;
  &lt;button type="button" class="product-list-btn"&gt;Se mere&lt;/button&gt;
&lt;/div&gt;
</code></small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#8 </strong></summary>
    <p><small>Is the correct file being imported?</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>There is no <code>main.js</code> file. We have only </br>
    <code>index.js</code></small></p>
  </details>
</details>

<hr>

</br>

### **🌸 Hints & Soutions for <ins>index.js</ins> 🌸**

<details>
    <summary><strong>💡 hint-#1 </strong></summary>
    <p><small>There is something missing from the file path in the import.</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>We are missing the file extension. We need to use the full file extension when using ES Modules, because the browser won't autocomplete the extension (unless we are using a build tool like Webpack or Vite). </br> <code>import { data } from "./data.js";</code></small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#2 </strong></summary>
    <p><small>How many product lists do we have on the page and does the query selector for the <code>listEl</code> make sense?</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>Since we have only one product list, there is no reason to use <code>querySelectorAll</code>. </br> 
    <code>const listEl = document.querySelector(".product-list");</code></small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#3 </strong></summary>
    <p><small>There is something missing from the <code>showMoreItemsBtn</code> querySelector.</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>The <code>.product-list-btn</code> is a CSS class, so we are missing the CSS selector for it. If we were using <code>getElementsByClassName</code> or <code>getElementById</code>, then we wouldn't need to specify the CSS selector.</br>
    <code>const showMoreItemsBtn = document.querySelector(".product-list-btn");</code></small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#4 </strong></summary>
    <p><small>Is the href attribute value in the &lt;a&gt; tag correct?</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>The value for the href is a literal string, not a variable. We need to wrap it in a dollar sign and curly braces, if we want to avoid having it render as a normal string.</br>
    <code>href="${item.linkUrl}"</code></small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#5 </strong></summary>
    <p><small>Is the target attribute value in the &lt;a&gt; tag correct?</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>To open the link in a new tab, we need to use "_blank" as a value and not "new_tab" which is invalid.</br>
    <code>target="_blank"</code></small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#6 </strong></summary>
    <p><small>The first &lt;span&gt; in the product list item description is rendering <code>item.title</code>- is that correct? (check the data file 👀)</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>The actual data objects in the data array don't have a property called title. We should use the name instead.</br>
    <code>&lt;span class="product-list-item-name"&gt;${item.name}&lt;/span&gt;
</code></small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#7 </strong></summary>
    <p><small>In the second &lt;span&gt; in the product list item description we are calling the function <code>formatSum</code>. Is that correct?</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>The function name is actually <code>formatPrice</code> and we are defining it on line 17.</br>
<code>&lt;span class="product-list-item-price"&gt;${formatPrice(item.price)}&lt;/span&gt;
</code></small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#8 </strong></summary>
    <p><small>There is something wrong with the parameters in the <code>toggle()</code> method.</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>The first parameter should be a string in all 4 places.</br>
<code> if (outlined && filled) {
    outlined.classList.toggle("is-hidden", isFavorited);
    outlined.classList.toggle("is-active", !isFavorited);
    filled.classList.toggle("is-hidden", !isFavorited);
    filled.classList.toggle("is-active", isFavorited);
  }
</code></small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#9 </strong></summary>
    <p><small>The product list (listEl) has multiple favorites buttons inside. Are we using the correct querySelector?</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>Since there are multiple buttons, we should use <code>querySelectorAll</code>.</br>
<code> listEl.querySelectorAll(".product-list-item-favorites-btn")
</code></small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#10 </strong></summary>
    <p><small>Should we return nothing if the list element and the button container are present?</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>The logic is reversed, we should return nothing if there is no list element or button container.</br>
<code>if (!listEl || !btnContainer) return;</code></small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#11 </strong></summary>
    <p><small>We are rendering 7 items, instead of 8. Perhaps something is wrong with the logic in the <code>slice</code> method?</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>Since the currentIndex is already 8, we don't need to substract 1 from it.</br>
<code> const visibleItems = data.slice(0, currentIndex);</code></small></p>
  </details>
</details>

<hr>

<details>
    <summary><strong>💡 hint-#12 </strong></summary>
    <p><small>Clicking the show more items button removes all the items, instead of adding new ones? Something is wrong with the logic.</small></p>
    <details>
    <summary><small>solution</small></summary>
    <p><small>We should add instead of substract.</br>
<code> currentIndex += ITEMS_PER_PAGE;</code></small></p>
  </details>
</details>

<hr>