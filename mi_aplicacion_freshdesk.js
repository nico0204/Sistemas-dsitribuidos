<!-- Customer Care |WhatsApp - Remington CO -->
<!-- ----------------------------------------------------------------------- -->
<!--                               CHAT WIDGET                               -->
<!-- ----------------------------------------------------------------------- -->


 
<!-- Customer Care -->
<style>
	/* Base Styles Setup */
	/* Chat Widget */
  
	#freshworks-container #launcher-frame {
		display: none !important;
	  }
  
	@media (max-width: 451px) {
  
	  #fc_frame {
		min-width: 65px !important;
		max-width: 65px !important;
		bottom: 4px !important;
		right: 0 !important;
	  }
  
	  #fc_frame.fc-open {
		min-width: 0 !important;
		max-width: none !important;
		bottom: 0 !important;
	  }
  
	  #fc_frame #fc_widget {
		transform: scale(0.7);
		bottom: 0 !important;
		right: 0 !important;
	  }
	  
		#freshworks-container #launcher-frame {
		display: none !important;
	  }
  
	  #fc_frame.fc-open #fc_widget {
		transform: scale(1);
	  }
	  
	}
  
	/* - Mobile Clean Up */
	@media (min-width: 451px) {
  
	  /* Positon */
	  #freshworks-frame-wrapper {
		bottom: 10px !important;
		left: 10px !important;
	  }
	}
   
	  
	/* Don't cover Header */
	@media (max-width: 667px) {
	  #freshworks-frame-wrapper {
		top: auto !important;
		height: calc(100% - 75px) !important;
	  }
	  
	}
  </style>
  
  <script>
  
   
	window.blCustomerCareOptions = {
  
  
	  contactID: 70000003919,
	  contactTriggerClass: 'contactWidgetLink',
	  contactHeaderBG: '#000000',
	  contactHeaderFG: '#f2f2f2',
  
	  chatToken: "40efd8dc-8db0-4e1e-8e9c-38a6bd44a06e",
	  chatTriggerClass: 'chatWidgetLink',
	  chatHeaderBG: '#000000',
	  chatHeaderFG: '#f2f2f2'
	};
  
	// [Actions] Triggers for DOM Interactions
	var _doc = document;
	_doc.addEventListener('click', function (e) {
	  _el = e.target;
	  if (!_el) return;
  
	  // Contact
	  if (
		_el.classList.contains(window.blCustomerCareOptions.contactTriggerClass) ||
		_el.title.indexOf(window.blCustomerCareOptions.contactTriggerClass) > -1
	  ) {
		e.preventDefault();
		FreshworksWidget('open');
		return;
	  }
  
	  // Chat
	  if (_el.classList.contains(window.blCustomerCareOptions.chatTriggerClass)) {
		e.preventDefault();
		fcWidget.open();
		return;
	  }
  
	}, false)
  
	// [Initializers] Full Widgets Init + Previously defined Options
  
	// - Contact
	window.fwSettings = { 
	  'widget_id': window.blCustomerCareOptions.contactID, 
	  'locale': 'es-LA', 
	  config: { headerProperty: { backgroundColor: window.blCustomerCareOptions.contactHeaderBG, foregroundColor: window.blCustomerCareOptions.contactHeaderFG, } } }; // Seetings
	
	!function () { 
	  if ("function" != typeof window.FreshworksWidget) 
	  { var n = function () { n.q.push(arguments) };
	   n.q = [], window.FreshworksWidget = n } }();  
	// Function
	
	FreshworksWidget('hideChoices', 'ticketForm', { 'type': ['No Aplica', 'Quiebres', 'Imposible de Entrega', 'Estado del pedido', 'Service Task', 'Politica De Cambios','Solicitud de Devolución','Serv tecnico','Solicitud de Cambios','Institucionales' ] });
	FreshworksWidget("prefill", "ticketForm", {
		 
		  subject: "Remington CO Tienda Online - Formulario de contacto"
		  
		});
  
	   FreshworksWidget("hide", "ticketForm", ["subject","custom_fields.cf_submotivo933869"]);
	   FreshworksWidget("hide", "ticketForm","type" ["cf_asunto"]);
	   FreshworksWidget('hide', 'ticketForm', ['custom_fields.cf_submotivo577071'])
	// Arguments
   
	var _sct = _doc.createElement("script"); _sct.async = !0; _sct.defer = !0; _sct.src = 'https://widget.freshworks.com/widgets/' + window.blCustomerCareOptions.contactID + '.js'; _doc.head.appendChild(_sct); 
	// Injection
  
	
	function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"Freshdesk Messaging-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
  
  
  
  </script>
  <!-- /Customer Care -->