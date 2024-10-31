(function(){"use strict";var e={3342:function(e,t,n){var a=n(3751),i=n(641),o=n(33);const s={id:"app"},l={key:1,ref:"nameDialog",class:"edit-dialog"},d={class:"dialog-buttons"},c={key:2,ref:"imageDialog",class:"edit-dialog"},r={class:"image-grid"},m=["onClick"],g=["src","alt"],u={class:"image-name"},p={class:"dialog-buttons"};function h(e,t,n,h,y,I){const v=(0,i.g2)("PageManager"),f=(0,i.g2)("LeftSidebar"),C=(0,i.g2)("Canvas"),E=(0,i.g2)("RightSidebar"),N=(0,i.g2)("DeviceSelector");return(0,i.uX)(),(0,i.CE)("div",s,[(0,i.Lk)("header",null,[(0,i.bF)(v,{pages:y.pages,onAddPage:I.addNewPage,onSelectPage:I.selectPage,onDeletePage:I.deletePage},null,8,["pages","onAddPage","onSelectPage","onDeletePage"])]),(0,i.Lk)("main",null,[(0,i.bF)(f,{collapsed:y.leftSidebarCollapsed,components:y.uiComponents,onToggle:I.toggleLeftSidebar,onDragStart:I.dragStart},null,8,["collapsed","components","onToggle","onDragStart"]),(0,i.bF)(C,{deviceType:y.selectedDeviceType,elements:y.canvasElements,onElementDropped:I.addElement,onDeleteElement:I.deleteElement,onUpdateElementPosition:I.updateElementPosition,onResizeElement:I.resizeElement,onElementSelected:I.selectElement,onConnectionsUpdated:I.updateConnections,onContextMenu:I.handleContextMenu},null,8,["deviceType","elements","onElementDropped","onDeleteElement","onUpdateElementPosition","onResizeElement","onElementSelected","onConnectionsUpdated","onContextMenu"]),(0,i.bF)(E,{collapsed:y.rightSidebarCollapsed,xml:I.generatedXml,onToggle:I.toggleRightSidebar},null,8,["collapsed","xml","onToggle"])]),y.showContextMenu?((0,i.uX)(),(0,i.CE)("div",{key:0,style:(0,o.Tr)({position:"fixed",top:y.contextMenuY+"px",left:y.contextMenuX+"px",zIndex:1e3}),class:"context-menu"},[(0,i.Lk)("div",{onClick:t[0]||(t[0]=(...e)=>I.openNameDialog&&I.openNameDialog(...e)),class:"menu-item"},"Change Name"),(0,i.Lk)("div",{onClick:t[1]||(t[1]=(...e)=>I.openImageDialog&&I.openImageDialog(...e)),class:"menu-item"},"Change Image")],4)):(0,i.Q3)("",!0),y.showNameDialog?((0,i.uX)(),(0,i.CE)("dialog",l,[(0,i.Lk)("form",{onSubmit:t[4]||(t[4]=(0,a.D$)(((...e)=>I.saveName&&I.saveName(...e)),["prevent"]))},[(0,i.Lk)("label",null,[t[8]||(t[8]=(0,i.eW)(" New Name: ")),(0,i.bo)((0,i.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>y.editingName=e),type:"text"},null,512),[[a.Jo,y.editingName]])]),(0,i.Lk)("div",d,[t[9]||(t[9]=(0,i.Lk)("button",{type:"submit"},"Save",-1)),(0,i.Lk)("button",{type:"button",onClick:t[3]||(t[3]=(...e)=>I.closeNameDialog&&I.closeNameDialog(...e))},"Cancel")])],32)],512)):(0,i.Q3)("",!0),y.showImageDialog?((0,i.uX)(),(0,i.CE)("dialog",c,[(0,i.Lk)("form",{onSubmit:t[7]||(t[7]=(0,a.D$)(((...e)=>I.saveImage&&I.saveImage(...e)),["prevent"]))},[(0,i.Lk)("label",null,[t[10]||(t[10]=(0,i.eW)(" Image URL: ")),(0,i.bo)((0,i.Lk)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>y.editingImage=e),type:"text"},null,512),[[a.Jo,y.editingImage]])]),t[12]||(t[12]=(0,i.eW)(" or ")),t[13]||(t[13]=(0,i.Lk)("h3",{class:"dialog-title"},"Select Image:",-1)),(0,i.Lk)("div",r,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(y.availableImages,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.path,class:(0,o.C4)(["image-item",{selected:y.selectedImagePath===e.path}]),onClick:t=>y.selectedImagePath=e.path},[(0,i.Lk)("img",{src:e.path,alt:e.name},null,8,g),(0,i.Lk)("span",u,(0,o.v_)(e.name),1)],10,m)))),128))]),(0,i.Lk)("div",p,[t[11]||(t[11]=(0,i.Lk)("button",{type:"submit"},"Save",-1)),(0,i.Lk)("button",{type:"button",onClick:t[6]||(t[6]=(...e)=>I.closeImageDialog&&I.closeImageDialog(...e))},"Cancel")])],32)],512)):(0,i.Q3)("",!0),t[14]||(t[14]=(0,i.Lk)("button",null,[(0,i.Lk)("a",{href:"https://suwilanjitrey.github.io/Ikaris_image_editor/",target:"_blank"},"Edit and Create images")],-1)),(0,i.Lk)("footer",null,[(0,i.bF)(N,{selectedType:y.selectedDeviceType,onChange:e.updateDeviceType},null,8,["selectedType","onChange"])])])}n(4114);const y={class:"page-manager-container"},I={class:"page-carousel"},v=["onClick"],f={class:"page-content"},C=["onClick"];function E(e,t,n,a,s,l){return(0,i.uX)(),(0,i.CE)("div",y,[t[3]||(t[3]=(0,i.Lk)("span",{class:"material-icons"},"menu",-1)),t[4]||(t[4]=(0,i.Lk)("h1",null,"UI Designer",-1)),(0,i.Lk)("button",{class:"nav-btn",onClick:t[0]||(t[0]=(...e)=>l.scrollLeft&&l.scrollLeft(...e))},"◀"),(0,i.Lk)("div",I,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.pages,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t,class:"page-box",onClick:t=>l.selectPage(e)},[(0,i.Lk)("div",f,(0,o.v_)(e.name),1),(0,i.Lk)("button",{onClick:e=>l.deletePage(t),class:"delete-page-btn"},"x",8,C)],8,v)))),128))]),(0,i.Lk)("button",{class:"nav-btn",onClick:t[1]||(t[1]=(...e)=>l.scrollRight&&l.scrollRight(...e))},"▶"),(0,i.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>l.addPage&&l.addPage(...e)),class:"add-page-btn"},"+")])}var N={props:["pages"],methods:{addPage(){this.$emit("addPage")},deletePage(e){this.$emit("deletePage",e)},selectPage(e){this.$emit("selectPage",e)},scrollLeft(){const e=this.$el.querySelector(".page-carousel");e.scrollLeft-=100},scrollRight(){const e=this.$el.querySelector(".page-carousel");e.scrollLeft+=100}}},k=n(6262);const x=(0,k.A)(N,[["render",E],["__scopeId","data-v-6114a66d"]]);var w=x;const L={class:"sidebar-content"},b={class:"components-grid"},D=["onDragstart"],S={class:"component-inner"},P=["src","alt"],_={class:"component-name"};function T(e,t,n,a,s,l){return(0,i.uX)(),(0,i.CE)("div",{class:(0,o.C4)(["sidebar",{collapsed:n.collapsed}])},[(0,i.Lk)("div",L,[(0,i.Lk)("div",b,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.components,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.type,class:"component-item",draggable:"true",onDragstart:t=>l.dragStart(t,e)},[(0,i.Lk)("div",S,[e.currentImage?((0,i.uX)(),(0,i.CE)("img",{key:0,src:e.currentImage,alt:e.displayName,class:"component-icon"},null,8,P)):(0,i.Q3)("",!0),(0,i.Lk)("span",_,(0,o.v_)(e.displayName),1)])],40,D)))),128))])]),(0,i.Lk)("button",{onClick:t[0]||(t[0]=t=>e.$emit("toggle")),class:"toggle-button"},(0,o.v_)(n.collapsed?">":"<"),1)],2)}var $={props:{collapsed:{type:Boolean,default:!1},components:{type:Array,required:!0}},methods:{dragStart(e,t){this.$emit("dragStart",e,t)}}};const M=(0,k.A)($,[["render",T],["__scopeId","data-v-54fc3ad8"]]);var X=M;const V={class:"canvas-container"},B={class:"phone-frame"},R={class:"screen-area"},O=["data-element-id","data-index","onMousedown","onClick","onContextmenu","onDragstart"],A=["src","alt"],F={key:1},z={class:"constraint-nodes"},Y=["onDblclick"],U=["onDblclick"],j=["onDblclick"],J=["onDblclick"],W={class:"connection-lines"},G=["x1","y1","x2","y2"],K=["onMousedown"];function q(e,t,n,s,l,d){return(0,i.uX)(),(0,i.CE)("div",V,[(0,i.Lk)("div",B,[(0,i.Lk)("div",R,[(0,i.Lk)("div",{ref:"canvas",class:(0,o.C4)(["canvas",n.deviceType]),onDragover:t[0]||(t[0]=(0,a.D$)((()=>{}),["prevent"])),onDrop:t[1]||(t[1]=e=>d.handleDrop(e))},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.elements,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:e.id,class:(0,o.C4)(["canvas-element",{selected:l.selectedElementIndex===t}]),"data-element-id":e.id,"data-index":t,style:(0,o.Tr)({left:e.x+"px",top:e.y+"px",width:e.width+"px",height:e.height+"px"}),onMousedown:e=>d.startMove(e,t),onClick:(0,a.D$)((e=>d.selectElement(t)),["stop"]),onContextmenu:(0,a.D$)((t=>d.handleContextMenu(t,e.id)),["prevent"]),draggable:"true",onDragstart:e=>d.startDrag(e,t)},[e.currentImage?((0,i.uX)(),(0,i.CE)("img",{key:0,src:e.currentImage,alt:e.displayName,class:"element-image"},null,8,A)):((0,i.uX)(),(0,i.CE)("span",F,(0,o.v_)(e.displayName||e.type),1)),(0,i.eW)(" "+(0,o.v_)(e.type)+" ",1),(0,i.Lk)("div",z,[(0,i.Lk)("div",{class:(0,o.C4)(["constraint-node top",{connected:d.hasConnection(e,"top"),"selected-node":d.isNodeSelected(e.id,"top")}]),onDblclick:(0,a.D$)((e=>d.handleNodeClick(t,"top")),["stop"]),style:{top:"-6px",left:"calc(50% - 4px)"}},null,42,Y),(0,i.Lk)("div",{class:(0,o.C4)(["constraint-node bottom",{connected:d.hasConnection(e,"bottom"),"selected-node":d.isNodeSelected(e.id,"bottom")}]),onDblclick:(0,a.D$)((e=>d.handleNodeClick(t,"bottom")),["stop"]),style:{bottom:"-6px",left:"calc(50% - 4px)"}},null,42,U),(0,i.Lk)("div",{class:(0,o.C4)(["constraint-node start",{connected:d.hasConnection(e,"start"),"selected-node":d.isNodeSelected(e.id,"start")}]),onDblclick:(0,a.D$)((e=>d.handleNodeClick(t,"start")),["stop"]),style:{left:"-6px",top:"calc(50% - 4px)"}},null,42,j),(0,i.Lk)("div",{class:(0,o.C4)(["constraint-node end",{connected:d.hasConnection(e,"end"),"selected-node":d.isNodeSelected(e.id,"end")}]),onDblclick:(0,a.D$)((e=>d.handleNodeClick(t,"end")),["stop"]),style:{right:"-6px",top:"calc(50% - 4px)"}},null,42,J)]),((0,i.uX)(),(0,i.CE)("svg",W,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.connectionLines,(e=>((0,i.uX)(),(0,i.CE)("line",{key:e.id,x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stroke:"#2196F3","stroke-width":"2"},null,8,G)))),128))])),(0,i.Lk)("div",{class:"resize-handle",onMousedown:(0,a.D$)((e=>d.startResize(e,t)),["stop"])},null,40,K)],46,O)))),128))],34)])]),(0,i.Lk)("div",{class:"trash-section",onDragover:t[2]||(t[2]=(0,a.D$)((()=>{}),["prevent"])),onDrop:t[3]||(t[3]=e=>d.deleteElement(e))},t[4]||(t[4]=[(0,i.Lk)("span",null,"Drag here to delete",-1)]),32)])}var H={props:{deviceType:String,elements:Array},data(){return{selectedElementIndex:null,isDragging:!1,selectedSourceNode:null,connections:[],connectionLines:[]}},methods:{handleNodeClick(e,t){const n=this.elements[e];this.selectedSourceNode?(n.id===this.selectedSourceNode.elementId&&t===this.selectedSourceNode.nodeType||this.createConnection({sourceElementId:this.selectedSourceNode.elementId,sourceNode:this.selectedSourceNode.nodeType,targetElementId:n.id,targetNode:t}),this.selectedSourceNode=null):this.selectedSourceNode={elementId:n.id,nodeType:t,elementIndex:e}},isNodeSelected(e,t){return this.selectedSourceNode&&this.selectedSourceNode.elementId===e&&this.selectedSourceNode.nodeType===t},handleContextMenu(e,t){this.$emit("contextMenu",e,t)},updateConnectionLine(e){if(!this.isConnecting||!this.tempConnectionLine)return;const t=this.$refs.canvas.getBoundingClientRect(),n=e.clientX-t.left,a=e.clientY-t.top;this.tempConnectionLine={...this.tempConnectionLine,x2:n,y2:a}},updateConnection(e){if(!this.isConnecting||!this.tempConnectionLine)return;const t=this.$refs.canvas.getBoundingClientRect(),n=e.clientX-t.left,a=e.clientY-t.top;this.tempConnectionLine={...this.tempConnectionLine,x2:n,y2:a}},endConnection(e){if(!this.isConnecting)return;const t=this.findTargetNode(e);if(t){const e=this.elements[t.elementIndex],n={id:Date.now(),sourceElementId:this.activeConnection.sourceElementId,sourceNode:this.activeConnection.sourceNode,targetElementId:e.id,targetNode:t.nodeType};this.connections.push(n),this.updateConnectionLines()}this.isConnecting=!1,this.activeConnection=null,this.tempConnectionLine=null,window.removeEventListener("mousemove",this.updateConnectionLine),window.removeEventListener("mouseup",this.endConnection)},createConnection(e){if(this.hasExistingConnection(e))return;const t={id:Date.now(),...e};this.connections.push(t),this.$emit("connectionsUpdated",this.connections),this.updateConnectionLines()},updateConnectionLines(){this.connectionLines=this.connections.map((e=>{const t=this.elements.find((t=>t.id===e.sourceElementId)),n=this.elements.find((t=>t.id===e.targetElementId));if(!t||!n)return null;const a=this.getNodePosition(t,e.sourceNode),i=this.getNodePosition(n,e.targetNode);return{id:e.id,x1:a.x,y1:a.y,x2:i.x,y2:i.y}})).filter(Boolean)},getNodePosition(e,t){let n=e.x,a=e.y;switch(t){case"top":n+=e.width/2;break;case"bottom":n+=e.width/2,a+=e.height;break;case"start":a+=e.height/2;break;case"end":n+=e.width,a+=e.height/2;break}return{x:n,y:a}},hasExistingConnection(e){return this.connections.some((t=>t.sourceElementId===e.sourceElementId&&t.sourceNode===e.sourceNode&&t.targetElementId===e.targetElementId&&t.targetNode===e.targetNode||t.sourceElementId===e.targetElementId&&t.sourceNode===e.targetNode&&t.targetElementId===e.sourceElementId&&t.targetNode===e.sourceNode))},findTargetNode(e){const t=document.elementsFromPoint(e.clientX,e.clientY),n=t.find((e=>e.classList.contains("constraint-node")));if(n){const e=n.closest(".canvas-element"),t=parseInt(e.dataset.index),a=Array.from(n.classList).find((e=>["top","bottom","start","end"].includes(e)));return{elementIndex:t,nodeType:a}}return null},hasConnection(e,t){return this.connections.some((n=>n.sourceElementId===e.id&&n.sourceNode===t||n.targetElementId===e.id&&n.targetNode===t))},handleDrop(e){if(this.isDragging)return void(this.isDragging=!1);e.preventDefault();const t=e.target.getBoundingClientRect(),n=e.clientX-t.left,a=e.clientY-t.top,i=e.dataTransfer.getData("text/plain");this.$emit("elementDropped",{...JSON.parse(i),x:n,y:a})},startMove(e,t){if(e.target.classList.contains("resize-handle"))return;this.selectElement(t);const n=this.elements[t];if(!n)return;const a=e.clientX,i=e.clientY,o=n.x,s=n.y,l=e.target.closest(".screen-area"),d=e=>{let d=o+(e.clientX-a),c=s+(e.clientY-i);const r=l.offsetWidth-n.width,m=l.offsetHeight-n.height;d=Math.max(0,Math.min(d,r)),c=Math.max(0,Math.min(c,m)),this.$emit("updateElementPosition",t,d,c)},c=()=>{window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",c)};window.addEventListener("mousemove",d),window.addEventListener("mouseup",c)},startResize(e,t){this.selectElement(t);const n=this.elements[t];if(!n)return;const a=e.clientX,i=e.clientY,o=n.width,s=n.height,l=this.$refs.canvas.getBoundingClientRect(),d=e=>{const d=e.clientX-a,c=e.clientY-i;let r=Math.max(20,o+d),m=Math.max(20,s+c);r=Math.min(r,l.width-n.x),m=Math.min(m,l.height-n.y),this.$emit("resizeElement",t,r,m)},c=()=>{window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",c)};window.addEventListener("mousemove",d),window.addEventListener("mouseup",c)},selectElement(e){this.selectedElementIndex=e,this.$emit("elementSelected",e)},startDrag(e,t){this.isDragging=!0,e.dataTransfer.setData("text/plain",t.toString())},deleteElement(e){const t=e.dataTransfer.getData("text/plain");""!==t&&this.$emit("deleteElement",parseInt(t,10)),this.isDragging=!1},watch:{elements:{deep:!0,handler(){this.updateConnectionLines()}}}}};const Q=(0,k.A)(H,[["render",q],["__scopeId","data-v-8830043c"]]);var Z=Q;const ee={class:"sidebar-content"};function te(e,t,n,a,s,l){return(0,i.uX)(),(0,i.CE)("div",{class:(0,o.C4)(["sidebar",{collapsed:n.collapsed}])},[(0,i.Lk)("button",{onClick:t[0]||(t[0]=t=>e.$emit("toggle")),class:"toggle-button"},(0,o.v_)(n.collapsed?"<":">"),1),(0,i.Lk)("div",ee,[t[1]||(t[1]=(0,i.Lk)("h3",null,"XML Code",-1)),(0,i.Lk)("pre",null,[(0,i.Lk)("code",null,(0,o.v_)(n.xml),1)])])],2)}var ne={props:["collapsed","xml"],methods:{toggle(){this.$emit("toggle")}}};const ae=(0,k.A)(ne,[["render",te],["__scopeId","data-v-0b865404"]]);var ie=ae;const oe=["value"];function se(e,t,n,a,o,s){return(0,i.uX)(),(0,i.CE)("select",{value:n.selectedType,onInput:t[0]||(t[0]=(...e)=>s.updateDeviceType&&s.updateDeviceType(...e)),class:"device-select"},t[1]||(t[1]=[(0,i.Lk)("option",{value:"phone"},"Phone",-1),(0,i.Lk)("option",{value:"tablet"},"Tablet",-1)]),40,oe)}var le={props:["selectedType"],methods:{updateDeviceType(e){this.$emit("change",e.target.value)}}};const de=(0,k.A)(le,[["render",se]]);var ce=de,re=n(953),me={components:{PageManager:w,LeftSidebar:X,Canvas:Z,RightSidebar:ie,DeviceSelector:ce},name:"ExternalSiteButton",data(){return{pages:[{name:"activity_main.xml"}],selectedPage:null,canvasElements:(0,re.Kh)([]),selectedDeviceType:"phone",leftSidebarCollapsed:!1,rightSidebarCollapsed:!1,selectedElementIndex:null,connections:[],uiComponents:[{type:"Button",displayName:"Button",defaultImage:null,currentImage:"../IkarisC.S.I/img/button.png"},{type:"TextView",displayName:"TextView",defaultImage:null,currentImage:"../IkarisC.S.I/img/text_view.png"},{type:"EditText",displayName:"EditText",defaultImage:null,currentImage:null},{type:"ImageBotton",displayName:"ImageButton",defaultImage:null,currentImage:null},{type:"TextInputLayout",displayName:"TextInputLayout",defaultImage:null,currentImage:null},{type:"FloatingActionButton",displayName:"FloatingActionButton",defaultImage:null,currentImage:null},{type:"RadioButton",displayName:"RadioButton",defaultImage:null,currentImage:"../IkarisC.S.I/img/radio.png"},{type:"CheckBox",displayName:"CheckBox",defaultImage:null,currentImage:"../IkarisC.S.I/img/checkbox_off.png"},{type:"Switch",displayName:"Switch",defaultImage:null,currentImage:"../IkarisC.S.I/img/switch_on.png"},{type:"ToggleButton",displayName:"ToggleButton",defaultImage:null,currentImage:null},{type:"ChipGroup",displayName:"ChipGroup",defaultImage:null,currentImage:null},{type:"Chip",displayName:"Chip",defaultImage:null,currentImage:null},{type:"RecyclerView",displayName:"RecyclerView",defaultImage:null,currentImage:"../IkarisC.S.I/img/recycler_view.png"},{type:"ScrollView",displayName:"ScrollView",defaultImage:null,currentImage:null},{type:"HorizontaScrollView",displayName:"HorizontaScrollView",defaultImage:null,currentImage:null},{type:"ViewPager2",displayName:"ViewPager2",defaultImage:null,currentImage:null},{type:"CardView",displayName:"CardView",defaultImage:null,currentImage:null},{type:"NestedScrollView",displayName:"NestedScrollView",defaultImage:null,currentImage:null},{type:"TabLayout",displayName:"TabLayout",defaultImage:null,currentImage:null},{type:"ToolBar",displayName:"ToolBar",defaultImage:null,currentImage:null},{type:"BottomNavigationView",displayName:"BottomNavigationView",defaultImage:null,currentImage:null},{type:"NavigationView",displayName:"NavigationView",defaultImage:null,currentImage:null},{type:"FrameLayout",displayName:"FrameLayout",defaultImage:null,currentImage:null},{type:"GridLayout",displayName:"GridLayout",defaultImage:null,currentImage:null},{type:"ListView",displayName:"ListView",defaultImage:null,currentImage:null},{type:"GridView",displayName:"GridView",defaultImage:null,currentImage:null},{type:"ExpandableListView",displayName:"ExpandableListView",defaultImage:null,currentImage:null},{type:"Spinner",displayName:"Spinner",defaultImage:null,currentImage:null},{type:"ImageView",displayName:"ImageView",defaultImage:null,currentImage:"../IkarisC.S.I/img/image.png"},{type:"VideoView",displayName:"VideoView",defaultImage:null,currentImage:null},{type:"WebView",displayName:"WebView",defaultImage:null,currentImage:null},{type:"MediaController",displayName:"MediaController",defaultImage:null,currentImage:null},{type:"ProgressBar",displayName:"ProgressBar",defaultImage:null,currentImage:"../IkarisC.S.I/img/progress_bar.png"},{type:"RatingBar",displayName:"RatingBar",defaultImage:null,currentImage:"../IkarisC.S.I/img/rating_bar.png"},{type:"SeekBar",displayName:"SeekBar",defaultImage:null,currentImage:"../IkarisC.S.I/img/seek_bar.png"},{type:"SearchView",displayName:"SearchView",defaultImage:null,currentImage:null}],showContextMenu:!1,contextMenuX:0,contextMenuY:0,selectedElementId:null,showNameDialog:!1,showImageDialog:!1,editingName:"",editingImage:"",canvasEdgeThreshold:10,availableImages:[{name:"Profile",path:"../IkarisC.S.I/img/profile.png"},{name:"Button",path:"../IkarisC.S.I/img/logo.png"}],selectedImagePath:""}},computed:{generatedXml(){const e=this.selectedPage?this.selectedPage.name:"No Page Selected";let t='<?xml version="1.0" encoding="utf-8"?>\n';return t+=`\x3c!-- ${e} --\x3e\n`,t+='<androidx.constraintlayout.widget.ConstraintLayout\n    xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent">\n\n',this.canvasElements.forEach((e=>{const n=e.width?`${e.width}dp`:"wrap_content",a=e.height?`${e.height}dp`:"wrap_content",i=this.generateAndroidId(e.displayName||e.type,e.id);t+=`    <${e.type}\n`,t+=`        android:id="@+id/${i}"\n`,t+=`        android:layout_width="${n}"\n`,t+=`        android:layout_height="${a}"\n`,t+=this.generateConstraints(e),t+="        />\n\n"})),t+="</androidx.constraintlayout.widget.ConstraintLayout>",t}},created(){this.selectedPage=this.pages[0],this.loadPageContent(this.selectedPage)},methods:{dragStart(e,t){const n={type:t.type,displayName:t.displayName,currentImage:t.currentImage};e.dataTransfer.setData("text/plain",JSON.stringify(n))},updateConnections(e){Array.isArray(e)?this.connections=e:this.connections.push(e),this.savePageContent(this.selectedPage,{elements:this.canvasElements,connections:this.connections})},getElementConnections(e){return this.connections.filter((t=>t.sourceElement.id===e||t.targetElement.id===e))},onContextMenu(e,t){this.$emit("contextMenu",e,t)},generateAndroidId(e){let t=e.toLowerCase().replace(/[^a-z0-9]/g,"_").replace(/^[^a-z]/,"id$&").replace(/_+/g,"_").replace(/^_|_$/g,"");return`${t}`},generateConstraints(e){let t="";const n=document.querySelector(".canvas"),a=n?n.getBoundingClientRect():null;if(!a)return t;const i=e.y<=this.canvasEdgeThreshold,o=e.y+e.height>=a.height-this.canvasEdgeThreshold,s=e.x<=this.canvasEdgeThreshold,l=e.x+e.width>=a.width-this.canvasEdgeThreshold,d=this.connections.filter((t=>t.sourceElementId===e.id||t.targetElementId===e.id));if(i&&(t+='        app:layout_constraintTop_toTopOf="parent"\n'),o&&(t+='        app:layout_constraintBottom_toBottomOf="parent"\n'),s&&(t+='        app:layout_constraintStart_toStartOf="parent"\n'),l&&(t+='        app:layout_constraintEnd_toEndOf="parent"\n'),d.forEach((n=>{const a=n.sourceElementId===e.id,i=a?n.sourceNode:n.targetNode,o=a?n.targetNode:n.sourceNode,s=a?n.targetElementId:n.sourceElementId,l=this.canvasElements.find((e=>e.id===s));if(l){const e=this.getConstraintDirection(i,o),n=this.generateAndroidId(l.displayName||l.type,l.id);e&&(t+=`        app:layout_constraint${e}_to${this.capitalizeFirst(o)}Of="@+id/${n}"\n`)}})),t||(t+='        app:layout_constraintStart_toStartOf="parent"\n',t+='        app:layout_constraintTop_toTopOf="parent"\n'),!s&&!l&&e.x>0){const n=(e.x/a.width).toFixed(2);t+=`        app:layout_constraintHorizontal_bias="${n}"\n`}if(!i&&!o&&e.y>0){const n=(e.y/a.height).toFixed(2);t+=`        app:layout_constraintVertical_bias="${n}"\n`}return t},getConstraintDirection(e,t){const n={top:"Top",bottom:"Bottom",start:"Start",end:"End"};return n[t]},capitalizeFirst(e){return e.charAt(0).toUpperCase()+e.slice(1)},getElementRefId(e){const t=this.canvasElements.find((t=>t.id===e));return t?`${t.type.toLowerCase()}_${t.id}`:""},addNewPage(){const e=`layout_${this.pages.length+1}.xml`;this.pages.push({name:e}),this.selectPage(this.pages[this.pages.length-1]),this.canvasElements=[]},deletePage(e){this.pages.splice(e,1),0===this.pages.length&&this.pages.push({name:"activity_main.xml"})},selectPage(e){this.selectedPage=e,this.loadPageContent(e)},savePageContent(e,t){const n=JSON.parse(localStorage.getItem("pages")||"{}");n[e.name]=t,localStorage.setItem("pages",JSON.stringify(n))},loadPageContent(e){const t=JSON.parse(localStorage.getItem("pages")||"{}"),n=t[e.name]||{elements:[],connections:[]};this.canvasElements=n.elements||[],this.connections=n.connections||[]},addElement(e){try{const t={id:Date.now(),type:e.type,displayName:e.displayName,currentImage:e.currentImage||null,x:e.x,y:e.y,width:100,height:100};this.canvasElements.push(t)}catch(t){console.error("Error adding element:",t),console.log("Received dropData:",e)}},selectElement(e){this.selectedElementIndex=e},deleteElement(e){e>=0&&e<this.canvasElements.length&&(this.canvasElements.splice(e,1),this.savePageContent(this.selectedPage,this.canvasElements),this.selectedElementIndex=null)},updateElementPosition(e,t,n){e>=0&&e<this.canvasElements.length&&(this.canvasElements[e]={...this.canvasElements[e],x:t,y:n},this.savePageContent(this.selectedPage,this.canvasElements))},resizeElement(e,t,n){e>=0&&e<this.canvasElements.length&&(this.canvasElements[e]={...this.canvasElements[e],width:t,height:n},this.savePageContent(this.selectedPage,this.canvasElements))},toggleLeftSidebar(){this.leftSidebarCollapsed=!this.leftSidebarCollapsed},toggleRightSidebar(){this.rightSidebarCollapsed=!this.rightSidebarCollapsed},handleContextMenu(e,t){e.preventDefault(),this.showContextMenu=!0,this.contextMenuX=e.clientX,this.contextMenuY=e.clientY,this.selectedElementId=t},openNameDialog(){const e=this.canvasElements.find((e=>e.id===this.selectedElementId));e&&(this.editingName=e.displayName||e.type,this.showNameDialog=!0,this.showContextMenu=!1,this.$nextTick((()=>{this.$refs.nameDialog&&this.$refs.nameDialog.showModal()})))},openImageDialog(){const e=this.canvasElements.find((e=>e.id===this.selectedElementId));e&&(this.editingImage=e.currentImage||"",this.showImageDialog=!0,this.showContextMenu=!1,this.$nextTick((()=>{this.$refs.imageDialog&&this.$refs.imageDialog.showModal()})))},closeNameDialog(){this.$refs.nameDialog&&this.$refs.nameDialog.close(),this.showNameDialog=!1},closeImageDialog(){this.$refs.imageDialog&&this.$refs.imageDialog.close(),this.showImageDialog=!1},saveName(){const e=this.canvasElements.find((e=>e.id===this.selectedElementId));e&&(e.displayName=this.editingName,this.connections=this.connections.map((t=>t.sourceElementId===e.id||t.targetElementId===e.id?{...t,sourceRef:t.sourceElementId===e.id?this.generateAndroidId(e.displayName,e.id):t.sourceRef,targetRef:t.targetElementId===e.id?this.generateAndroidId(e.displayName,e.id):t.targetRef}:t)),this.savePageContent(this.selectedPage,{elements:this.canvasElements,connections:this.connections})),this.closeNameDialog()},saveImage(){const e=this.canvasElements.find((e=>e.id===this.selectedElementId));e&&(e.currentImage=this.editingImage||this.selectedImagePath,this.savePageContent(this.selectedPage,{elements:this.canvasElements,connections:this.connections})),this.closeImageDialog()},updateComponentName(e,t){const n=this.uiComponents.find((t=>t.type===e));n&&(n.displayName=t)},closeContextMenu(){this.showContextMenu=!1}},mounted(){document.addEventListener("click",(e=>{e.target.closest(".context-menu")||this.closeContextMenu()}))},beforeUnmount(){document.removeEventListener("click",this.closeContextMenu)}};const ge=(0,k.A)(me,[["render",h]]);var ue=ge;(0,a.Ef)(ue).mount("#app")}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,o){if(!a){var s=1/0;for(r=0;r<e.length;r++){a=e[r][0],i=e[r][1],o=e[r][2];for(var l=!0,d=0;d<a.length;d++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[d])}))?a.splice(d--,1):(l=!1,o<s&&(s=o));if(l){e.splice(r--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var r=e.length;r>0&&e[r-1][2]>o;r--)e[r]=e[r-1];e[r]=[a,i,o]}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,s=a[0],l=a[1],d=a[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(d)var r=d(n)}for(t&&t(a);c<s.length;c++)o=s[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(r)},a=self["webpackChunkandroid_ui_designer"]=self["webpackChunkandroid_ui_designer"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(3342)}));a=n.O(a)})();
//# sourceMappingURL=app.02bad658.js.map