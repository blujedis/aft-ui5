<script lang="ts">
	import ColorMode from '$lib/components/colormode/ColorMode.svelte';
</script>

<!-- <ColorMode>
	{#snippet children(prop)}
		{prop.isDark()}
	{/snippet}
</ColorMode> -->

<!-- <div>
	<p class="mb-24">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt metus diam, quis
		ultrices lectus dictum et. Praesent arcu augue, laoreet in ultrices eu, vulputate non mi. Sed
		pulvinar pretium lacus, quis tincidunt leo fermentum nec. Aliquam eget laoreet massa.
		Pellentesque nec tellus sed nunc gravida viverra. Nunc ut urna auctor ex varius posuere in at
		nisl. Sed orci ex, condimentum in elit quis, maximus sollicitudin eros. Etiam felis quam,
		viverra eget ex eu, imperdiet lobortis risus. Aliquam erat volutpat. Phasellus mollis et odio
		vel hendrerit. Morbi semper, nisl ac tempor auctor, lorem nisl vulputate nunc, nec posuere urna
		nisi vitae urna. Mauris elementum posuere sagittis. Nam maximus dictum libero sed pretium. Nulla
		ac quam ligula. Phasellus a felis metus.
	</p>
	<p class="mb-24">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt metus diam, quis
		ultrices lectus dictum et. Praesent arcu augue, laoreet in ultrices eu, vulputate non mi. Sed
		pulvinar pretium lacus, quis tincidunt leo fermentum nec. Aliquam eget laoreet massa.
		Pellentesque nec tellus sed nunc gravida viverra. Nunc ut urna auctor ex varius posuere in at
		nisl. Sed orci ex, condimentum in elit quis, maximus sollicitudin eros. Etiam felis quam,
		viverra eget ex eu, imperdiet lobortis risus. Aliquam erat volutpat. Phasellus mollis et odio
		vel hendrerit. Morbi semper, nisl ac tempor auctor, lorem nisl vulputate nunc, nec posuere urna
		nisi vitae urna. Mauris elementum posuere sagittis. Nam maximus dictum libero sed pretium. Nulla
		ac quam ligula. Phasellus a felis metus.
	</p>
	<p class="mb-24">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt metus diam, quis
		ultrices lectus dictum et. Praesent arcu augue, laoreet in ultrices eu, vulputate non mi. Sed
		pulvinar pretium lacus, quis tincidunt leo fermentum nec. Aliquam eget laoreet massa.
		Pellentesque nec tellus sed nunc gravida viverra. Nunc ut urna auctor ex varius posuere in at
		nisl. Sed orci ex, condimentum in elit quis, maximus sollicitudin eros. Etiam felis quam,
		viverra eget ex eu, imperdiet lobortis risus. Aliquam erat volutpat. Phasellus mollis et odio
		vel hendrerit. Morbi semper, nisl ac tempor auctor, lorem nisl vulputate nunc, nec posuere urna
		nisi vitae urna. Mauris elementum posuere sagittis. Nam maximus dictum libero sed pretium. Nulla
		ac quam ligula. Phasellus a felis metus.
	</p>
	<p class="mb-24">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt metus diam, quis
		ultrices lectus dictum et. Praesent arcu augue, laoreet in ultrices eu, vulputate non mi. Sed
		pulvinar pretium lacus, quis tincidunt leo fermentum nec. Aliquam eget laoreet massa.
		Pellentesque nec tellus sed nunc gravida viverra. Nunc ut urna auctor ex varius posuere in at
		nisl. Sed orci ex, condimentum in elit quis, maximus sollicitudin eros. Etiam felis quam,
		viverra eget ex eu, imperdiet lobortis risus. Aliquam erat volutpat. Phasellus mollis et odio
		vel hendrerit. Morbi semper, nisl ac tempor auctor, lorem nisl vulputate nunc, nec posuere urna
		nisi vitae urna. Mauris elementum posuere sagittis. Nam maximus dictum libero sed pretium. Nulla
		ac quam ligula. Phasellus a felis metus.
	</p>
	<p class="mb-24">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt metus diam, quis
		ultrices lectus dictum et. Praesent arcu augue, laoreet in ultrices eu, vulputate non mi. Sed
		pulvinar pretium lacus, quis tincidunt leo fermentum nec. Aliquam eget laoreet massa.
		Pellentesque nec tellus sed nunc gravida viverra. Nunc ut urna auctor ex varius posuere in at
		nisl. Sed orci ex, condimentum in elit quis, maximus sollicitudin eros. Etiam felis quam,
		viverra eget ex eu, imperdiet lobortis risus. Aliquam erat volutpat. Phasellus mollis et odio
		vel hendrerit. Morbi semper, nisl ac tempor auctor, lorem nisl vulputate nunc, nec posuere urna
		nisi vitae urna. Mauris elementum posuere sagittis. Nam maximus dictum libero sed pretium. Nulla
		ac quam ligula. Phasellus a felis metus.
	</p>
	<p class="mb-24">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt metus diam, quis
		ultrices lectus dictum et. Praesent arcu augue, laoreet in ultrices eu, vulputate non mi. Sed
		pulvinar pretium lacus, quis tincidunt leo fermentum nec. Aliquam eget laoreet massa.
		Pellentesque nec tellus sed nunc gravida viverra. Nunc ut urna auctor ex varius posuere in at
		nisl. Sed orci ex, condimentum in elit quis, maximus sollicitudin eros. Etiam felis quam,
		viverra eget ex eu, imperdiet lobortis risus. Aliquam erat volutpat. Phasellus mollis et odio
		vel hendrerit. Morbi semper, nisl ac tempor auctor, lorem nisl vulputate nunc, nec posuere urna
		nisi vitae urna. Mauris elementum posuere sagittis. Nam maximus dictum libero sed pretium. Nulla
		ac quam ligula. Phasellus a felis metus.
	</p>
	<p class="mb-24">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt metus diam, quis
		ultrices lectus dictum et. Praesent arcu augue, laoreet in ultrices eu, vulputate non mi. Sed
		pulvinar pretium lacus, quis tincidunt leo fermentum nec. Aliquam eget laoreet massa.
		Pellentesque nec tellus sed nunc gravida viverra. Nunc ut urna auctor ex varius posuere in at
		nisl. Sed orci ex, condimentum in elit quis, maximus sollicitudin eros. Etiam felis quam,
		viverra eget ex eu, imperdiet lobortis risus. Aliquam erat volutpat. Phasellus mollis et odio
		vel hendrerit. Morbi semper, nisl ac tempor auctor, lorem nisl vulputate nunc, nec posuere urna
		nisi vitae urna. Mauris elementum posuere sagittis. Nam maximus dictum libero sed pretium. Nulla
		ac quam ligula. Phasellus a felis metus.
	</p>
	<p class="mb-24">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt metus diam, quis
		ultrices lectus dictum et. Praesent arcu augue, laoreet in ultrices eu, vulputate non mi. Sed
		pulvinar pretium lacus, quis tincidunt leo fermentum nec. Aliquam eget laoreet massa.
		Pellentesque nec tellus sed nunc gravida viverra. Nunc ut urna auctor ex varius posuere in at
		nisl. Sed orci ex, condimentum in elit quis, maximus sollicitudin eros. Etiam felis quam,
		viverra eget ex eu, imperdiet lobortis risus. Aliquam erat volutpat. Phasellus mollis et odio
		vel hendrerit. Morbi semper, nisl ac tempor auctor, lorem nisl vulputate nunc, nec posuere urna
		nisi vitae urna. Mauris elementum posuere sagittis. Nam maximus dictum libero sed pretium. Nulla
		ac quam ligula. Phasellus a felis metus.
	</p>
	<p class="mb-24">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt metus diam, quis
		ultrices lectus dictum et. Praesent arcu augue, laoreet in ultrices eu, vulputate non mi. Sed
		pulvinar pretium lacus, quis tincidunt leo fermentum nec. Aliquam eget laoreet massa.
		Pellentesque nec tellus sed nunc gravida viverra. Nunc ut urna auctor ex varius posuere in at
		nisl. Sed orci ex, condimentum in elit quis, maximus sollicitudin eros. Etiam felis quam,
		viverra eget ex eu, imperdiet lobortis risus. Aliquam erat volutpat. Phasellus mollis et odio
		vel hendrerit. Morbi semper, nisl ac tempor auctor, lorem nisl vulputate nunc, nec posuere urna
		nisi vitae urna. Mauris elementum posuere sagittis. Nam maximus dictum libero sed pretium. Nulla
		ac quam ligula. Phasellus a felis metus.
	</p>
</div> -->
