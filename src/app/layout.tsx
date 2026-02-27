import type { Metadata } from "next";
import Script from 'next/script';
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "T.H. Plumbing - Fast, Affordable & Reliable Plumbing in Lehigh Valley",
  description: "Master plumber services in Lehigh Valley since 2008. Emergency repairs, pipe installation, drain cleaning, and more. Call 610-746-2206 for a free quote.",
  keywords: ["plumbing", "Lehigh Valley", "emergency repairs", "pipe installation", "drain cleaning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-zylo-id="zylo-778d5e702d02">
      <head>


        {/* ZYLO_DESIGNER_INJECTION_START */}
        <Script
          id="zylo-designer-bridge"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
'use strict';

// Prevent double initialization
if (window.__ZYLO_DESIGNER_BRIDGE__) {
  console.debug('[DesignerBridge] Already initialized, skipping');
} else {

  // ============================================================
  // Configuration
  // ============================================================

  var VERSION = '1.0.0' !== '__' + 'VERSION__' ? '1.0.0' : '1.0.0';
  var PREFIX = 'ZYLO_DESIGNER' !== '__' + 'PREFIX__' ? 'ZYLO_DESIGNER' : 'ZYLO_DESIGNER';
  var DEBUG = 'false' === 'true';

  // Build metadata (injected at build time)
  var BUILD_ID = '__BUILD_ID__' !== '__' + 'BUILD_ID__' ? '__BUILD_ID__' : 'unknown';
  var MAP_HASH = '__MAP_HASH__' !== '__' + 'MAP_HASH__' ? '__MAP_HASH__' : 'unknown';

  // ============================================================
  // State
  // ============================================================

  var state = 'dormant';
  var hoveredNodeId = null;
  var selectedNodeId = null;
  var patchMap = new Map(); // nodeId -> Map<patchId, { styles, attributes, content }>
  var originalStyles = new Map(); // nodeId -> original inline styles
  var originalAttributes = new Map(); // nodeId -> Map<attrName, originalValue>
  var originalContent = new Map(); // nodeId -> original text content

  // Overlay elements for replaced elements (images, video, etc.)
  var hoverOverlay = null;
  var selectionOverlay = null;
  var REPLACED_ELEMENTS = ['IMG', 'VIDEO', 'CANVAS', 'IFRAME', 'EMBED', 'OBJECT'];

  // Inline prompt element
  var inlinePrompt = null;
  var inlinePromptVisible = false;
  var currentSelectedMeta = null; // Store full meta for selected node

  // Expose bridge on window
  window.__ZYLO_DESIGNER_BRIDGE__ = {
    version: VERSION,
    buildId: BUILD_ID,
    mapHash: MAP_HASH,
    state: state,
    getState: function() { return state; },
    getSelectedNode: function() { return selectedNodeId; },
    getHoveredNode: function() { return hoveredNodeId; },
    getBuildId: function() { return BUILD_ID; },
    getMapHash: function() { return MAP_HASH; },
  };

  var bridge = window.__ZYLO_DESIGNER_BRIDGE__;

  // ============================================================
  // Utilities
  // ============================================================

  function log() {
    if (DEBUG) {
      console.debug.apply(console, ['[DesignerBridge]'].concat(Array.prototype.slice.call(arguments)));
    }
  }

  function generateMessageId() {
    return 'msg_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }

  function send(eventType, payload) {
    if (window.parent === window) return;

    var message = {
      type: PREFIX + ':' + eventType,
      payload: payload || {},
      timestamp: Date.now(),
      messageId: generateMessageId(),
    };

    log('Sending:', eventType, payload);
    window.parent.postMessage(message, '*');
  }

  function getNodeById(nodeId) {
    return document.querySelector('[data-zylo-id="' + nodeId + '"]');
  }

  function parseLocation(locStr) {
    if (!locStr) return { locStart: null, locEnd: null };
    var parts = locStr.split('-');
    if (parts.length !== 2) return { locStart: null, locEnd: null };
    var startParts = parts[0].split(':');
    var endParts = parts[1].split(':');
    if (startParts.length !== 2 || endParts.length !== 2) return { locStart: null, locEnd: null };
    return {
      locStart: { line: parseInt(startParts[0], 10), column: parseInt(startParts[1], 10) },
      locEnd: { line: parseInt(endParts[0], 10), column: parseInt(endParts[1], 10) },
    };
  }

  function getNodeMeta(element) {
    if (!element || !element.dataset) return null;

    var nodeId = element.dataset.zyloId;
    if (!nodeId) return null;

    // Parse location data from data-zylo-loc attribute (format: "line:col-line:col")
    var locData = parseLocation(element.dataset.zyloLoc);

    // Get text content for text elements (CONTENT capability = 0b100000000 = 256)
    var caps = parseInt(element.dataset.zyloCap || '0', 10);
    var hasContentCap = (caps & 256) !== 0;
    var textContent = hasContentCap ? getDirectTextContent(element) : undefined;

    return {
      nodeId: nodeId,
      kind: element.dataset.zyloKind || 'container',
      capabilities: caps,
      tagName: element.tagName.toLowerCase(),
      rect: element.getBoundingClientRect(),
      // New attributes for AST editing
      filePath: element.dataset.zyloFile || '',
      componentName: element.dataset.zyloComponent || undefined,
      locStart: locData.locStart,
      locEnd: locData.locEnd,
      // Text content for CONTENT capability
      textContent: textContent,
    };
  }

  /**
   * Get direct text content of an element (excluding nested element text)
   * For <p>Hello <span>world</span></p>, returns "Hello world"
   */
  function getDirectTextContent(element) {
    // Use innerText for rendered text (respects CSS, collapses whitespace)
    // This gives us the text as the user sees it
    return element.innerText || element.textContent || '';
  }

  function findZyloParent(element) {
    var current = element;
    while (current && current !== document.body) {
      if (current.dataset && current.dataset.zyloId) {
        return current;
      }
      current = current.parentElement;
    }
    return null;
  }

  // ============================================================
  // Overlay Management (for images and replaced elements)
  // ============================================================

  function isReplacedElement(element) {
    return element && REPLACED_ELEMENTS.indexOf(element.tagName) !== -1;
  }

  function createOverlay(type) {
    var overlay = document.createElement('div');
    overlay.id = 'zylo-' + type + '-overlay';
    overlay.style.cssText = [
      'position: fixed',
      'pointer-events: none',
      'z-index: 99999',
      'box-sizing: border-box',
      'border: 3px solid ' + (type === 'hover' ? 'var(--zylo-hover-color, #3b82f6)' : 'var(--zylo-select-color, #8b5cf6)'),
      'box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.9), 0 0 0 4px rgba(0, 0, 0, 0.3)',
      'border-radius: 2px',
      'display: none',
    ].join('; ');
    document.body.appendChild(overlay);
    return overlay;
  }

  function showOverlay(overlay, element) {
    if (!overlay || !element) return;
    var rect = element.getBoundingClientRect();
    overlay.style.top = rect.top + 'px';
    overlay.style.left = rect.left + 'px';
    overlay.style.width = rect.width + 'px';
    overlay.style.height = rect.height + 'px';
    overlay.style.display = 'block';
  }

  function hideOverlay(overlay) {
    if (overlay) {
      overlay.style.display = 'none';
    }
  }

  function ensureOverlays() {
    if (!hoverOverlay) {
      hoverOverlay = createOverlay('hover');
    }
    if (!selectionOverlay) {
      selectionOverlay = createOverlay('selection');
    }
  }

  function cleanupOverlays() {
    if (hoverOverlay && hoverOverlay.parentNode) {
      hoverOverlay.parentNode.removeChild(hoverOverlay);
      hoverOverlay = null;
    }
    if (selectionOverlay && selectionOverlay.parentNode) {
      selectionOverlay.parentNode.removeChild(selectionOverlay);
      selectionOverlay = null;
    }
  }

  // Update overlay positions on scroll/resize
  function updateOverlayPositions() {
    // Update hover overlay if visible
    if (hoverOverlay && hoverOverlay.style.display !== 'none' && hoveredNodeId) {
      var hoveredEl = getNodeById(hoveredNodeId);
      if (hoveredEl && isReplacedElement(hoveredEl)) {
        showOverlay(hoverOverlay, hoveredEl);
      }
    }
    // Update selection overlay if visible
    if (selectionOverlay && selectionOverlay.style.display !== 'none' && selectedNodeId) {
      var selectedEl = getNodeById(selectedNodeId);
      if (selectedEl && isReplacedElement(selectedEl)) {
        showOverlay(selectionOverlay, selectedEl);
      }
    }
  }

  // Throttled scroll handler for performance
  var scrollRAF = null;
  function onScrollOrResize() {
    if (scrollRAF) return;
    scrollRAF = requestAnimationFrame(function() {
      updateOverlayPositions();
      updateInlinePromptPosition();
      scrollRAF = null;
    });
  }

  // ============================================================
  // Inline Prompt Management
  // ============================================================

  function createInlinePrompt() {
    var prompt = document.createElement('div');
    prompt.className = 'zylo-inline-prompt';
    prompt.innerHTML = [
      '<input type="text" class="zylo-inline-prompt-input" placeholder="Edit with Zylo..." />',
      '<button class="zylo-inline-prompt-submit" title="Submit">',
      '  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"/></svg>',
      '</button>',
      '<div class="zylo-inline-prompt-divider"></div>',
      '<button class="zylo-inline-prompt-action" title="View code">',
      '  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg>',
      '</button>',
    ].join('');

    var input = prompt.querySelector('.zylo-inline-prompt-input');
    var submitBtn = prompt.querySelector('.zylo-inline-prompt-submit');
    var codeBtn = prompt.querySelector('.zylo-inline-prompt-action');

    // Update submit button style based on input content
    function updateSubmitButton() {
      if (input.value.trim()) {
        submitBtn.classList.add('has-content');
      } else {
        submitBtn.classList.remove('has-content');
      }
    }

    // Input events
    input.addEventListener('input', updateSubmitButton);

    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        submitInlinePrompt();
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        hideInlinePrompt();
      }
    });

    // Submit button
    submitBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      submitInlinePrompt();
    });

    // Code button - send VIEW_CODE event
    codeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      if (currentSelectedMeta) {
        log('View code clicked:', currentSelectedMeta.filePath, currentSelectedMeta.locStart);
        send('VIEW_CODE', {
          nodeId: currentSelectedMeta.nodeId,
          filePath: currentSelectedMeta.filePath,
          locStart: currentSelectedMeta.locStart,
          locEnd: currentSelectedMeta.locEnd,
        });
      }
    });

    // Prevent clicks inside from deselecting
    prompt.addEventListener('click', function(e) {
      e.stopPropagation();
    });

    document.body.appendChild(prompt);
    return prompt;
  }

  function ensureInlinePrompt() {
    if (!inlinePrompt) {
      inlinePrompt = createInlinePrompt();
    }
  }

  function positionInlinePrompt(element) {
    if (!inlinePrompt || !element) return;

    var rect = element.getBoundingClientRect();
    var promptHeight = 48; // Approximate height
    var gap = 8;
    var promptWidth = 360; // Min-width from CSS

    // Determine vertical position - below or above
    var spaceBelow = window.innerHeight - rect.bottom;
    var spaceAbove = rect.top;
    var positionAbove = spaceBelow < (promptHeight + gap + 20) && spaceAbove > spaceBelow;

    // Calculate horizontal position - centered on element
    var centerX = rect.left + (rect.width / 2);
    var left = centerX - (promptWidth / 2);

    // Keep in viewport horizontally
    left = Math.max(10, Math.min(left, window.innerWidth - promptWidth - 10));

    // Set position
    if (positionAbove) {
      inlinePrompt.style.top = (rect.top - promptHeight - gap) + 'px';
      inlinePrompt.classList.add('above');
    } else {
      inlinePrompt.style.top = (rect.bottom + gap) + 'px';
      inlinePrompt.classList.remove('above');
    }
    inlinePrompt.style.left = left + 'px';
  }

  function showInlinePrompt() {
    if (!currentSelectedMeta) return;

    ensureInlinePrompt();

    var element = getNodeById(selectedNodeId);
    if (!element) return;

    positionInlinePrompt(element);

    // Clear input and show
    var input = inlinePrompt.querySelector('.zylo-inline-prompt-input');
    if (input) {
      input.value = '';
      // Update submit button state
      var submitBtn = inlinePrompt.querySelector('.zylo-inline-prompt-submit');
      if (submitBtn) submitBtn.classList.remove('has-content');
    }

    inlinePrompt.classList.add('visible');
    inlinePromptVisible = true;

    // Focus input after animation
    setTimeout(function() {
      if (input) input.focus();
    }, 50);
  }

  function hideInlinePrompt() {
    if (inlinePrompt) {
      inlinePrompt.classList.remove('visible');
      var input = inlinePrompt.querySelector('.zylo-inline-prompt-input');
      if (input) input.value = '';
    }
    inlinePromptVisible = false;
  }

  function updateInlinePromptPosition() {
    if (!inlinePromptVisible || !selectedNodeId) return;
    var element = getNodeById(selectedNodeId);
    if (element) {
      positionInlinePrompt(element);
    }
  }

  function submitInlinePrompt() {
    if (!inlinePrompt || !currentSelectedMeta) {
      hideInlinePrompt();
      return;
    }

    var input = inlinePrompt.querySelector('.zylo-inline-prompt-input');
    var prompt = input ? input.value.trim() : '';

    if (!prompt) {
      // Don't hide, just return - user might want to keep typing
      return;
    }

    log('Submitting agent prompt:', prompt);

    // Send the prompt with full node metadata (same as before)
    send('AGENT_PROMPT_SUBMIT', {
      nodeId: currentSelectedMeta.nodeId,
      meta: currentSelectedMeta,
      prompt: prompt,
    });

    // Clear input but keep prompt visible for potential follow-up
    if (input) {
      input.value = '';
      var submitBtn = inlinePrompt.querySelector('.zylo-inline-prompt-submit');
      if (submitBtn) submitBtn.classList.remove('has-content');
    }
  }

  function cleanupInlinePrompt() {
    hideInlinePrompt();
    if (inlinePrompt && inlinePrompt.parentNode) {
      inlinePrompt.parentNode.removeChild(inlinePrompt);
      inlinePrompt = null;
    }
    currentSelectedMeta = null;
  }

  // ============================================================
  // Event Handlers (only active when enabled)
  // ============================================================

  var eventHandlers = {
    mouseover: function(e) {
      var target = findZyloParent(e.target);
      if (!target) {
        if (hoveredNodeId) {
          send('HOVER_END', { nodeId: hoveredNodeId });
          var prevHovered = getNodeById(hoveredNodeId);
          if (prevHovered) prevHovered.removeAttribute('data-zylo-hover');
          hideOverlay(hoverOverlay);
          hoveredNodeId = null;
        }
        return;
      }

      var meta = getNodeMeta(target);
      if (!meta || meta.nodeId === hoveredNodeId) return;

      // Clear previous hover
      if (hoveredNodeId) {
        var prevHovered = getNodeById(hoveredNodeId);
        if (prevHovered) prevHovered.removeAttribute('data-zylo-hover');
        hideOverlay(hoverOverlay);
        send('HOVER_END', { nodeId: hoveredNodeId });
      }

      // Set new hover
      hoveredNodeId = meta.nodeId;
      target.setAttribute('data-zylo-hover', 'true');

      // For replaced elements (images, video, etc.), show overlay
      if (isReplacedElement(target)) {
        ensureOverlays();
        showOverlay(hoverOverlay, target);
      }

      send('HOVER', { nodeId: meta.nodeId, meta: meta });
    },

    mouseout: function(e) {
      if (!e.relatedTarget || !document.contains(e.relatedTarget)) {
        if (hoveredNodeId) {
          var prevHovered = getNodeById(hoveredNodeId);
          if (prevHovered) prevHovered.removeAttribute('data-zylo-hover');
          hideOverlay(hoverOverlay);
          send('HOVER_END', { nodeId: hoveredNodeId });
          hoveredNodeId = null;
        }
      }
    },

    click: function(e) {
      // If clicking on inline prompt, don't process as selection
      if (inlinePrompt && inlinePrompt.contains(e.target)) return;

      var target = findZyloParent(e.target);

      // Clear previous selection
      if (selectedNodeId) {
        var prevSelected = getNodeById(selectedNodeId);
        if (prevSelected) prevSelected.removeAttribute('data-zylo-selected');
        hideOverlay(selectionOverlay);
        hideInlinePrompt();
      }

      // Hide hover overlay on click (selection takes over)
      hideOverlay(hoverOverlay);

      if (!target) {
        if (selectedNodeId) {
          send('DESELECT', { previousNodeId: selectedNodeId });
          selectedNodeId = null;
          currentSelectedMeta = null;
        }
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      var meta = getNodeMeta(target);
      if (!meta) return;

      selectedNodeId = meta.nodeId;
      target.setAttribute('data-zylo-selected', 'true');

      // For replaced elements (images, video, etc.), show selection overlay
      if (isReplacedElement(target)) {
        ensureOverlays();
        showOverlay(selectionOverlay, target);
      }

      // Get computed styles for selected element
      var computed = window.getComputedStyle(target);
      meta.computedStyles = {
        display: computed.display,
        position: computed.position,
        width: computed.width,
        height: computed.height,
        padding: computed.padding,
        margin: computed.margin,
        backgroundColor: computed.backgroundColor,
        color: computed.color,
        fontSize: computed.fontSize,
        fontWeight: computed.fontWeight,
      };

      // Store meta and show inline prompt immediately
      currentSelectedMeta = meta;
      showInlinePrompt();

      send('SELECT', { nodeId: meta.nodeId, meta: meta, rect: meta.rect });
    },
  };

  // ============================================================
  // Command Handlers
  // ============================================================

  function enable(payload) {
    if (state === 'active') return;

    log('Enabling designer mode');
    state = 'active';
    bridge.state = state;

    // Attach event listeners
    document.addEventListener('mouseover', eventHandlers.mouseover, true);
    document.addEventListener('mouseout', eventHandlers.mouseout, true);
    document.addEventListener('click', eventHandlers.click, true);

    // Attach scroll/resize listeners for overlay positioning
    window.addEventListener('scroll', onScrollOrResize, true);
    window.addEventListener('resize', onScrollOrResize, true);

    // Inject styles if not present
    injectOverlayStyles();

    send('ENABLED', { mode: payload.mode || 'design' });
  }

  function disable() {
    if (state !== 'active') return;

    log('Disabling designer mode');
    state = 'ready';
    bridge.state = state;

    // Remove event listeners
    document.removeEventListener('mouseover', eventHandlers.mouseover, true);
    document.removeEventListener('mouseout', eventHandlers.mouseout, true);
    document.removeEventListener('click', eventHandlers.click, true);

    // Remove scroll/resize listeners
    window.removeEventListener('scroll', onScrollOrResize, true);
    window.removeEventListener('resize', onScrollOrResize, true);

    // Clear visual states
    if (hoveredNodeId) {
      var hovered = getNodeById(hoveredNodeId);
      if (hovered) hovered.removeAttribute('data-zylo-hover');
      hoveredNodeId = null;
    }

    if (selectedNodeId) {
      var selected = getNodeById(selectedNodeId);
      if (selected) selected.removeAttribute('data-zylo-selected');
      selectedNodeId = null;
    }

    // Clean up overlays
    cleanupOverlays();

    // Clean up inline prompt
    cleanupInlinePrompt();

    // Clear all patches
    clearAllPatches();

    send('DISABLED', {});
  }

  function setHover(payload) {
    var nodeId = payload.nodeId;

    // Clear previous
    if (hoveredNodeId) {
      var prev = getNodeById(hoveredNodeId);
      if (prev) prev.removeAttribute('data-zylo-hover');
      hideOverlay(hoverOverlay);
    }

    hoveredNodeId = nodeId;

    if (nodeId) {
      var el = getNodeById(nodeId);
      if (el) {
        el.setAttribute('data-zylo-hover', 'true');
        // Show overlay for replaced elements
        if (isReplacedElement(el)) {
          ensureOverlays();
          showOverlay(hoverOverlay, el);
        }
      }
    }
  }

  function setSelection(payload) {
    var nodeId = payload.nodeId;

    // Clear previous
    if (selectedNodeId) {
      var prev = getNodeById(selectedNodeId);
      if (prev) prev.removeAttribute('data-zylo-selected');
      hideOverlay(selectionOverlay);
      hideInlinePrompt();
    }

    selectedNodeId = nodeId;

    if (nodeId) {
      var el = getNodeById(nodeId);
      if (el) {
        el.setAttribute('data-zylo-selected', 'true');
        // Show overlay for replaced elements
        if (isReplacedElement(el)) {
          ensureOverlays();
          showOverlay(selectionOverlay, el);
        }
        // Get and store meta, show inline prompt
        var meta = getNodeMeta(el);
        currentSelectedMeta = meta;
        showInlinePrompt();
        send('SELECT', { nodeId: nodeId, meta: meta });
      }
    } else {
      currentSelectedMeta = null;
    }
  }

  function applyPatch(payload) {
    var nodeId = payload.nodeId;
    var patchId = payload.patchId;
    var styles = payload.styles;
    var attributes = payload.attributes;
    var content = payload.content;

    var element = getNodeById(nodeId);
    if (!element) {
      send('ERROR', { code: 'NODE_NOT_FOUND', message: 'Node not found: ' + nodeId });
      return;
    }

    // Store original styles if not already stored
    if (!originalStyles.has(nodeId)) {
      originalStyles.set(nodeId, element.getAttribute('style') || '');
    }

    // Store original attributes for any we're about to modify
    if (attributes && !originalAttributes.has(nodeId)) {
      originalAttributes.set(nodeId, new Map());
    }
    if (attributes) {
      var origAttrs = originalAttributes.get(nodeId);
      Object.keys(attributes).forEach(function(attrName) {
        if (!origAttrs.has(attrName)) {
          origAttrs.set(attrName, element.getAttribute(attrName));
        }
      });
    }

    // Store original content if not already stored
    if (content !== undefined && !originalContent.has(nodeId)) {
      originalContent.set(nodeId, element.innerText || element.textContent || '');
    }

    // Store patch (now stores styles, attributes, and content)
    if (!patchMap.has(nodeId)) {
      patchMap.set(nodeId, new Map());
    }
    patchMap.get(nodeId).set(patchId, { styles: styles, attributes: attributes, content: content });

    // Apply all patches for this node
    var allPatches = patchMap.get(nodeId);
    var mergedStyles = {};
    var mergedAttributes = {};
    var mergedContent = undefined;

    allPatches.forEach(function(patch) {
      if (patch.styles) {
        Object.assign(mergedStyles, patch.styles);
      }
      if (patch.attributes) {
        Object.assign(mergedAttributes, patch.attributes);
      }
      if (patch.content !== undefined) {
        mergedContent = patch.content;
      }
    });

    // Apply styles to element
    Object.keys(mergedStyles).forEach(function(prop) {
      element.style[prop] = mergedStyles[prop];
    });

    // Apply attributes to element (e.g., src for images)
    Object.keys(mergedAttributes).forEach(function(attrName) {
      element.setAttribute(attrName, mergedAttributes[attrName]);
    });

    // Apply content to element (text content)
    if (mergedContent !== undefined) {
      // For text elements, set the text content
      // Use textContent for simple text, innerText preserves formatting
      element.textContent = mergedContent;
    }

    send('PATCH_APPLIED', { nodeId: nodeId, patchId: patchId });
  }

  function clearPatch(payload) {
    var nodeId = payload.nodeId;
    var patchId = payload.patchId;

    if (!patchMap.has(nodeId)) return;

    var patches = patchMap.get(nodeId);
    patches.delete(patchId);

    // Reapply remaining patches or restore original
    var element = getNodeById(nodeId);
    if (element) {
      if (patches.size === 0) {
        // Restore all originals
        element.setAttribute('style', originalStyles.get(nodeId) || '');

        // Restore original attributes
        if (originalAttributes.has(nodeId)) {
          originalAttributes.get(nodeId).forEach(function(value, attrName) {
            if (value === null) {
              element.removeAttribute(attrName);
            } else {
              element.setAttribute(attrName, value);
            }
          });
          originalAttributes.delete(nodeId);
        }

        // Restore original content
        if (originalContent.has(nodeId)) {
          element.textContent = originalContent.get(nodeId);
          originalContent.delete(nodeId);
        }

        patchMap.delete(nodeId);
        originalStyles.delete(nodeId);
      } else {
        // Restore originals then apply remaining patches
        element.setAttribute('style', originalStyles.get(nodeId) || '');

        // Restore original attributes first
        if (originalAttributes.has(nodeId)) {
          originalAttributes.get(nodeId).forEach(function(value, attrName) {
            if (value === null) {
              element.removeAttribute(attrName);
            } else {
              element.setAttribute(attrName, value);
            }
          });
        }

        // Restore original content first
        if (originalContent.has(nodeId)) {
          element.textContent = originalContent.get(nodeId);
        }

        // Now reapply remaining patches
        patches.forEach(function(patch) {
          if (patch.styles) {
            Object.keys(patch.styles).forEach(function(prop) {
              element.style[prop] = patch.styles[prop];
            });
          }
          if (patch.attributes) {
            Object.keys(patch.attributes).forEach(function(attrName) {
              element.setAttribute(attrName, patch.attributes[attrName]);
            });
          }
          if (patch.content !== undefined) {
            element.textContent = patch.content;
          }
        });
      }
    }

    send('PATCH_CLEARED', { nodeId: nodeId, patchId: patchId });
  }

  function clearAllPatches() {
    patchMap.forEach(function(_, nodeId) {
      var element = getNodeById(nodeId);
      if (!element) return;

      // Restore original styles
      if (originalStyles.has(nodeId)) {
        element.setAttribute('style', originalStyles.get(nodeId) || '');
      }

      // Restore original attributes
      if (originalAttributes.has(nodeId)) {
        originalAttributes.get(nodeId).forEach(function(value, attrName) {
          if (value === null) {
            element.removeAttribute(attrName);
          } else {
            element.setAttribute(attrName, value);
          }
        });
      }

      // Restore original content
      if (originalContent.has(nodeId)) {
        element.textContent = originalContent.get(nodeId);
      }
    });

    patchMap.clear();
    originalStyles.clear();
    originalAttributes.clear();
    originalContent.clear();

    send('PATCH_CLEARED', { all: true });
  }

  function scrollToNode(payload) {
    var element = getNodeById(payload.nodeId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function sendNodeMeta(payload) {
    var element = getNodeById(payload.nodeId);
    if (element) {
      send('NODE_META', { nodeId: payload.nodeId, meta: getNodeMeta(element) });
    } else {
      send('ERROR', { code: 'NODE_NOT_FOUND', message: 'Node not found: ' + payload.nodeId });
    }
  }

  // ============================================================
  // Command Router
  // ============================================================

  function handleCommand(event) {
    // Log ALL incoming messages for debugging
    console.log('[DesignerBridge:Iframe] Received message:', event.data);

    if (!event.data || !event.data.type) return;
    if (!event.data.type.startsWith(PREFIX + ':')) return;

    var command = event.data.type.replace(PREFIX + ':', '');
    var payload = event.data.payload || {};

    console.log('[DesignerBridge:Iframe] Processing command:', command, payload);
    log('Received command:', command, payload);

    switch (command) {
      case 'ENABLE':
        enable(payload);
        break;
      case 'DISABLE':
        disable();
        break;
      case 'SET_HOVER':
        setHover(payload);
        break;
      case 'SET_SELECTION':
        setSelection(payload);
        break;
      case 'PREVIEW_PATCH':
        applyPatch(payload);
        break;
      case 'CLEAR_PATCH':
        clearPatch(payload);
        break;
      case 'CLEAR_ALL_PATCHES':
        clearAllPatches();
        break;
      case 'SCROLL_TO':
        scrollToNode(payload);
        break;
      case 'REQUEST_META':
        sendNodeMeta(payload);
        break;
      default:
        log('Unknown command:', command);
    }
  }

  // ============================================================
  // Style Injection (Runtime Fallback)
  // ============================================================

  function injectOverlayStyles() {
    if (document.getElementById('zylo-designer-runtime-styles')) return;

    var style = document.createElement('style');
    style.id = 'zylo-designer-runtime-styles';
    // Use box-shadow inset for regular elements
    // Images/video/etc use JavaScript overlay (no CSS box-shadow)
    style.textContent = [
      '/* Base hover/selection for all elements */',
      '[data-zylo-hover] {',
      '  box-shadow: inset 0 0 0 2px var(--zylo-hover-color, #3b82f6) !important;',
      '  cursor: pointer !important;',
      '  position: relative;',
      '}',
      '[data-zylo-selected] {',
      '  box-shadow: inset 0 0 0 3px var(--zylo-select-color, #8b5cf6) !important;',
      '  position: relative;',
      '}',
      '',
      '/* Images use JavaScript overlay - just set cursor here */',
      'img[data-zylo-hover], video[data-zylo-hover], canvas[data-zylo-hover], iframe[data-zylo-hover] {',
      '  cursor: pointer !important;',
      '  box-shadow: none !important;',
      '}',
      'img[data-zylo-selected], video[data-zylo-selected], canvas[data-zylo-selected], iframe[data-zylo-selected] {',
      '  box-shadow: none !important;',
      '}',
    ].join('\\n');

    document.head.appendChild(style);
  }

  // ============================================================
  // Initialization
  // ============================================================

  // ALWAYS log initialization for debugging
  console.log('[DesignerBridge:Iframe] Script loaded, checking environment...');
  console.log('[DesignerBridge:Iframe] window === window.parent:', window === window.parent);
  console.log('[DesignerBridge:Iframe] DEBUG mode:', DEBUG);

  // Only send READY if we're in an iframe
  if (window !== window.parent) {
    console.log('[DesignerBridge:Iframe] In iframe, initializing bridge...');
    log('Bridge initialized, sending READY');
    state = 'ready';
    bridge.state = state;

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      console.log('[DesignerBridge:Iframe] DOM still loading, waiting...');
      document.addEventListener('DOMContentLoaded', function() {
        var nodeCount = document.querySelectorAll('[data-zylo-id]').length;
        console.log('[DesignerBridge:Iframe] DOM ready, sending READY. Node count:', nodeCount);
        console.log('[DesignerBridge:Iframe] Build ID:', BUILD_ID);
        console.log('[DesignerBridge:Iframe] Map Hash:', MAP_HASH);
        send('READY', {
          version: VERSION,
          buildId: BUILD_ID,
          mapVersion: MAP_HASH,
          bridgeId: generateMessageId(),
          nodeCount: nodeCount,
        });
      });
    } else {
      var nodeCount = document.querySelectorAll('[data-zylo-id]').length;
      console.log('[DesignerBridge:Iframe] DOM already ready, sending READY. Node count:', nodeCount);
      console.log('[DesignerBridge:Iframe] Build ID:', BUILD_ID);
      console.log('[DesignerBridge:Iframe] Map Hash:', MAP_HASH);
      send('READY', {
        version: VERSION,
        buildId: BUILD_ID,
        mapVersion: MAP_HASH,
        bridgeId: generateMessageId(),
        nodeCount: nodeCount,
      });
    }

    // Listen for commands
    console.log('[DesignerBridge:Iframe] Attaching message listener');
    window.addEventListener('message', handleCommand);
  } else {
    console.log('[DesignerBridge:Iframe] NOT in iframe (top-level window), staying dormant');
    log('Not in iframe, staying dormant');
  }

}
`
              .replace(/__BUILD_ID__/g, 'build_1772161425642_4dc669')
              .replace(/__MAP_HASH__/g, '07298c091519e10b4c3dca35c614b5171fb14edea805ed36886e99936c1f069a')
          }}
        />
        <style dangerouslySetInnerHTML={{ __html: `
/* ============================================================
   ZYLO Designer Mode - Overlay Styles
   ============================================================ */

/* CSS Variables for theming */
:root {
  --zylo-hover-color: #3b82f6;
  --zylo-select-color: #8b5cf6;
  --zylo-label-bg: #1f2937;
  --zylo-label-text: #ffffff;
  --zylo-spacing-color: #22c55e;
  --zylo-dimension-color: #f59e0b;
}

/* ============================================================
   Hover State
   ============================================================ */

/* Use box-shadow instead of outline for better overflow:hidden compatibility */
[data-zylo-hover] {
  box-shadow: inset 0 0 0 2px var(--zylo-hover-color, #3b82f6) !important;
  cursor: pointer !important;
  position: relative;
}

/* Label for hover - only works on non-replaced elements */
[data-zylo-hover]:not(img):not(video):not(audio):not(canvas):not(iframe):not(input):not(textarea):not(select)::before {
  content: attr(data-zylo-kind);
  position: absolute;
  top: -24px;
  left: 0;
  padding: 2px 6px;
  background: var(--zylo-hover-color, #3b82f6);
  color: white;
  font-size: 11px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 500;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10000;
}

/* ============================================================
   Selection State
   ============================================================ */

/* Use box-shadow instead of outline for better overflow:hidden compatibility */
[data-zylo-selected] {
  box-shadow: inset 0 0 0 3px var(--zylo-select-color, #8b5cf6) !important;
  position: relative;
}

/* Label for selection - only works on non-replaced elements */
[data-zylo-selected]:not(img):not(video):not(audio):not(canvas):not(iframe):not(input):not(textarea):not(select)::before {
  content: attr(data-zylo-kind);
  position: absolute;
  top: -24px;
  left: 0;
  padding: 2px 6px;
  background: var(--zylo-select-color, #8b5cf6);
  color: white;
  font-size: 11px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 500;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10001;
}

/* Selection handles (corners) - only for non-replaced elements */
[data-zylo-selected]:not(img):not(video):not(audio):not(canvas):not(iframe)::after {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  pointer-events: none;
  z-index: 10000;
}

/* ============================================================
   Replaced Elements (Images, Video, etc.) - JavaScript Overlay
   ============================================================ */

/*
 * Images and other replaced elements use a JavaScript overlay div
 * that positions itself on top of the image. This approach:
 * - Is NOT clipped by parent overflow:hidden
 * - Does NOT flicker
 * - Shows a clear visible border AROUND the element
 *
 * CSS here just sets cursor and removes any box-shadow that might conflict.
 */
img[data-zylo-hover],
video[data-zylo-hover],
canvas[data-zylo-hover],
iframe[data-zylo-hover] {
  cursor: pointer !important;
  box-shadow: none !important;
}

img[data-zylo-selected],
video[data-zylo-selected],
canvas[data-zylo-selected],
iframe[data-zylo-selected] {
  box-shadow: none !important;
}

/* ============================================================
   Overlay Label
   ============================================================ */

.zylo-overlay-label {
  position: fixed;
  padding: 4px 8px;
  background: var(--zylo-label-bg, #1f2937);
  color: var(--zylo-label-text, #ffffff);
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 500;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
  pointer-events: none;
  z-index: 10002;
}

.zylo-overlay-label-kind {
  color: var(--zylo-select-color, #8b5cf6);
  font-weight: 600;
}

.zylo-overlay-label-tag {
  color: #9ca3af;
  font-weight: 400;
  margin-left: 4px;
}

/* ============================================================
   Dimension Overlay
   ============================================================ */

.zylo-overlay-dimensions {
  position: fixed;
  padding: 2px 6px;
  background: var(--zylo-dimension-color, #f59e0b);
  color: #1f2937;
  font-size: 10px;
  font-family: 'SF Mono', Monaco, 'Fira Code', monospace;
  font-weight: 500;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10002;
}

/* ============================================================
   Spacing Overlay (Margin/Padding Visualization)
   ============================================================ */

.zylo-overlay-spacing {
  position: absolute;
  pointer-events: none;
  z-index: 9999;
}

.zylo-overlay-spacing-margin {
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid var(--zylo-spacing-color, #22c55e);
}

.zylo-overlay-spacing-padding {
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid var(--zylo-hover-color, #3b82f6);
}

.zylo-overlay-spacing-value {
  position: absolute;
  padding: 1px 4px;
  background: var(--zylo-spacing-color, #22c55e);
  color: white;
  font-size: 9px;
  font-family: 'SF Mono', Monaco, 'Fira Code', monospace;
  border-radius: 2px;
}

/* ============================================================
   Distance Lines (Between Elements)
   ============================================================ */

.zylo-overlay-distance {
  position: fixed;
  background: var(--zylo-dimension-color, #f59e0b);
  pointer-events: none;
  z-index: 10001;
}

.zylo-overlay-distance-horizontal {
  height: 1px;
}

.zylo-overlay-distance-vertical {
  width: 1px;
}

.zylo-overlay-distance-label {
  position: absolute;
  padding: 1px 4px;
  background: var(--zylo-dimension-color, #f59e0b);
  color: #1f2937;
  font-size: 9px;
  font-family: 'SF Mono', Monaco, 'Fira Code', monospace;
  font-weight: 500;
  border-radius: 2px;
  white-space: nowrap;
}

/* ============================================================
   Component Boundary Indicator
   ============================================================ */

[data-zylo-component-boundary] {
  position: relative;
}

[data-zylo-component-boundary]::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid rgba(139, 92, 246, 0.3);
  pointer-events: none;
  z-index: 9998;
  opacity: 0;
  transition: opacity 0.15s ease;
}

.zylo-show-boundaries [data-zylo-component-boundary]::after {
  opacity: 1;
}

/* ============================================================
   Animation for State Transitions
   ============================================================ */

[data-zylo-id] {
  transition: outline-color 0.15s ease, outline-offset 0.15s ease;
}

/* ============================================================
   Dark Mode Overrides
   ============================================================ */

@media (prefers-color-scheme: dark) {
  :root {
    --zylo-label-bg: #374151;
    --zylo-label-text: #f3f4f6;
  }
}

/* ============================================================
   Print - Hide Overlays
   ============================================================ */

@media print {
  [data-zylo-hover],
  [data-zylo-selected],
  .zylo-overlay-label,
  .zylo-overlay-dimensions,
  .zylo-overlay-spacing,
  .zylo-overlay-distance {
    outline: none !important;
  }

  [data-zylo-hover]::before,
  [data-zylo-selected]::before,
  [data-zylo-selected]::after {
    display: none !important;
  }
}

/* ============================================================
   Inline Prompt Bar (appears on element selection)
   ============================================================ */

/* Main container - pill-shaped dark bar */
.zylo-inline-prompt {
  position: fixed;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px 6px 16px;
  background: #18181b;
  border-radius: 999px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 10004;
  min-width: 320px;
  max-width: 480px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.zylo-inline-prompt.visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

/* Position above element */
.zylo-inline-prompt.above {
  transform: translateY(-8px);
}

.zylo-inline-prompt.above.visible {
  transform: translateY(0);
}

/* Input field */
.zylo-inline-prompt-input {
  flex: 1;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.4;
  outline: none;
  min-width: 0;
}

.zylo-inline-prompt-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

/* Submit button - circular with arrow */
.zylo-inline-prompt-submit {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;
}

.zylo-inline-prompt-submit:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.25);
}

.zylo-inline-prompt-submit:active {
  transform: scale(0.95);
}

.zylo-inline-prompt-submit.has-content {
  background: #9333ea;
  border-color: transparent;
  color: white;
  box-shadow: 0 4px 14px rgba(147, 51, 234, 0.3);
}

.zylo-inline-prompt-submit.has-content:hover {
  background: #a855f7;
  box-shadow: 0 4px 14px rgba(168, 85, 247, 0.4);
}

.zylo-inline-prompt-submit svg {
  width: 16px;
  height: 16px;
  stroke-width: 2;
}

/* Divider */
.zylo-inline-prompt-divider {
  width: 1px;
  height: 20px;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
}

/* Action button (code view) */
.zylo-inline-prompt-action {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;
}

.zylo-inline-prompt-action:hover {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.9);
}

.zylo-inline-prompt-action:active {
  transform: scale(0.95);
}

.zylo-inline-prompt-action svg {
  width: 16px;
  height: 16px;
  stroke-width: 2;
}
` }} />
        {/* ZYLO_DESIGNER_INJECTION_END */}
      </head>
      <body
        className={`${inter.variable} antialiased`}
       data-zylo-id="zylo-2283c7a185d2">
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              {children}
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
