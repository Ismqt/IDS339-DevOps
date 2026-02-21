from flask import Flask, jsonify, request
import os
from datetime import datetime

app = Flask(__name__)


@app.route("/health")
def health():
    """Health check endpoint."""
    return jsonify({
        "status": "ok",
        "service": "IDS339-DevOps-Python",
        "version": "1.0.0",
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "environment": os.getenv("FLASK_ENV", "development"),
    })


# In-memory store
items = [
    {"id": 1, "name": "Item Alpha"},
    {"id": 2, "name": "Item Beta"},
]


@app.route("/api/items", methods=["GET"])
def get_items():
    """Return all items."""
    return jsonify({"data": items, "count": len(items)})


@app.route("/api/items", methods=["POST"])
def create_item():
    """Create a new item."""
    data = request.get_json()
    if not data or "name" not in data:
        return jsonify({"error": "name is required"}), 400

    new_item = {"id": len(items) + 1, "name": data["name"]}
    items.append(new_item)
    return jsonify(new_item), 201


@app.route("/api/greet/<name>")
def greet(name: str):
    """Greet endpoint."""
    return jsonify({
        "message": f"Hello, {name}! Welcome to IDS339 DevOps.",
        "timestamp": datetime.utcnow().isoformat() + "Z",
    })


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5001))
    print(f"[IDS339-PY] Starting Flask app on port {port}")
    app.run(host="0.0.0.0", port=port, debug=True)
