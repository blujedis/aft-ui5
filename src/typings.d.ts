/* eslint-disable @typescript-eslint/no-explicit-any */

declare module '@event-calendar/core' {
  import { SvelteComponent } from 'svelte';
  class Calendar extends SvelteComponent {}
  export = Calendar;
}

declare module '@event-calendar/time-grid' {


}