<script>
    const headerButtons = [
    { label: 'Tee Times', href: 'https://resorter.ghost.io/golf-times/' },
    { label: 'PDR HOA', href: 'http://pdrhoa.org/' }
  ];
  function injectHeader() {
     const html = `
        <div class="w-full flex justify-between">
          ${headerButtons.map((b) => {
            return `
              <a class="px-4 py-1.5 rounded-sm ring-1 ring-inset ring-amber-600 text-amber-600" href="${b.href}">${b.label}</a>
            `;
          })}
        </div>
     `;
      console.log(html);
    }
</script>