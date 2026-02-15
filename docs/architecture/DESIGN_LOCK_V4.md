# DESIGN LOCK PROTOCOL V4: Strategic Canvas Layout
**Date:** 2026-02-14
**Status:** 🔥 LOCKED (DO NOT MODIFY WITHOUT AUTHORIZATION)
**Reason:** User Requirement "Single Screen Dashboard" + "Full Visibility"

## The "Golden Ratio" Layout
This layout was calibrated to satisfy the requirement of a single-screen dashboard experience (no main scrollbar) while ensuring the bottom row (Finance/Commercial) remains visible and accessible.

### Core Architecture
- **Shell**: `h-screen fixed overflow-hidden` (No page scroll).
- **Container**: `flex flex-col` (Vertical Stack).
- **Vertical Split**:
  - **Top Row**: `flex-[1.8]` (Allocates ~64% of vertical space).
  - **Bottom Row**: `flex-1` (Allocates ~36% of vertical space).
  - **Why?**: This ratio prevents the bottom row from being crushed on standard laptop screens (1366x768 / 1920x1080).

### Vital Statistics (Do Not Change)
| Property | Value | Purpose |
| :--- | :--- | :--- |
| **Global Padding** | `p-4` | Maximizes usable area. `p-5` was too loose. |
| **Grid Gap** | `gap-3` | Tight packing. `gap-5` wasted ~32px of vertical space. |
| **Overflow** | `min-h-0` | **CRITICAL**. Added to flex children to prevent flexbox overflow blowout. |
| **Scroll Strategy** | Internal | Cards scroll internally. The page does NOT scroll. |

### Code Reference (React/Tailwind)

```tsx
// 1. ROOT CONTAINER
<div className="flex w-full h-screen bg-[#020617] overflow-hidden">
  
  // 2. MAIN CONTENT AREA
  <div className="flex-1 relative h-full bg-[#020617] overflow-hidden">
    
    // 3. PADDING CONTAINER
    <div className="relative z-10 w-full h-full mx-auto p-4 flex flex-col gap-3">
       
       // 4. GRID CONTAINER
       <main className="flex-1 flex flex-col gap-3 relative z-10 pb-4 min-h-0">
          
          // 5. TOP ROW (64%)
          <div className="flex-[1.8] grid grid-cols-1 md:grid-cols-5 gap-3 min-h-0">
             {/* ... */}
          </div>

          // 6. BOTTOM ROW (36%)
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 min-h-0">
             {/* ... */}
          </div>

       </main>
    </div>
  </div>
</div>
```

## Regression Tests
Before asking "Is this okay?", verify:
1.  Is the main window scrollbar gone?
2.  Are "Finanzas" and "Comercial" visible without scrolling?
3.  Is the gap `12px` (`gap-3`)?

## Reference Image
- `reference_layout_target.jpeg` (See Artifacts)
