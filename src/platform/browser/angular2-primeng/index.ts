// Input
import {
  AutoComplete,
  Calendar,
  Checkbox,
  Dropdown,
  Editor,
  InputSwitch,
  InputText,
  InputTextarea,
  Listbox,
  MultiSelect,
  Password,
  RadioButton,
  Rating,
  Slider,
  Spinner,
  SelectButton,
  ToggleButton
} from 'primeng/primeng';
// Button
import {Button, SplitButton, SplitButtonItem} from 'primeng/primeng';
// Data
import {
  Carousel,
  DataGrid,
  DataList,
  DataScroller,
  DataTable,
  OrderList,
  GMap,
  Paginator,
  PickList,
  Schedule,
  Tree,
  TreeTable,
  TreeNode
} from 'primeng/primeng';
// Panel
import {Accordion, AccordionTab, Fieldset, Panel, TabView, Toolbar} from 'primeng/primeng';
// Overlay
import {Dialog, Lightbox, OverlayPanel, Tooltip} from 'primeng/primeng';
// Menu
import {
  Menu,
  Menubar,
  MenubarSub,
  MegaMenu,
  ContextMenu,
  ContextMenuSub,
  PanelMenu,
  PanelMenuSub,
  SlideMenu,
  SlideMenuSub,
  TabMenu,
  TieredMenu,
  TieredMenuSub
} from 'primeng/primeng';
// Charts
import {BarChart, DoughnutChart, LineChart, PolarAreaChart, PieChart, RadarChart} from 'primeng/primeng';
// Messages
import {Messages, Growl} from 'primeng/primeng';
// Multimedia
import {Galleria} from 'primeng/primeng';
//Drag&Drop
import {Draggable, Droppable} from 'primeng/primeng';
// Misc
import {ProgressBar, CodeHighlighter, Terminal} from 'primeng/primeng';


/*
 * we are grouping the module so we only need to manage the imports in one location
 */

export const PRIMENG_PIPES = [];

export const PRIMENG_DIRECTIVES = [
  ...[
    AutoComplete, Calendar, Checkbox, Dropdown, Editor, InputSwitch, InputText, InputTextarea, Listbox, MultiSelect, Password, RadioButton, Rating, Slider, Spinner, SelectButton, ToggleButton
  ],
  ...[
    Button, SplitButton, SplitButtonItem
  ],
  ...[
    Carousel, DataGrid, DataList, DataScroller, DataTable, OrderList, GMap, Paginator, PickList, Schedule, Tree, TreeTable
  ],
  ...[
    Accordion, AccordionTab, Fieldset, Panel, TabView, Toolbar
  ],
  ...[
    Menu, Menubar, MenubarSub, MegaMenu, ContextMenu, ContextMenuSub, PanelMenu, PanelMenuSub, SlideMenu, SlideMenuSub, TabMenu, TieredMenu, TieredMenuSub
  ],
  ...[
    Dialog, Lightbox, OverlayPanel, Tooltip
  ],
  ...[
    BarChart, DoughnutChart, LineChart, PolarAreaChart, PieChart, RadarChart
  ],
  ...[
    Messages, Growl
  ],
  ...[Galleria],
  ...[
    Draggable, Droppable
  ],
  ...[
    ProgressBar, CodeHighlighter, Terminal
  ]
];

export const PRIMENG_PROVIDERS = [];

